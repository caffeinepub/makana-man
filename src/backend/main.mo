import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  type Inquiry = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
  };

  let inquiries = Map.empty<Nat, Inquiry>();
  var nextInquiryId = 0;

  // User Profile Management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Inquiry Management
  public shared ({ caller }) func submitInquiry(name : Text, email : Text, message : Text) : async () {
    // No authorization check - anyone including guests can submit inquiries
    let inquiry = {
      id = nextInquiryId;
      name;
      email;
      message;
    };
    inquiries.add(nextInquiryId, inquiry);
    nextInquiryId += 1;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view inquiries");
    };
    inquiries.values().toArray();
  };

  public query ({ caller }) func getInquiry(id : Nat) : async ?Inquiry {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view inquiries");
    };
    inquiries.get(id);
  };
};
