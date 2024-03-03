import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white-500 text-black p-4" style={{height:"65vh"}}>
      <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
            <p className="text-sm">
              <br />
        <strong>Security:</strong> We prioritize the security of your personal information and take reasonable measures
        to protect it. However, no method of transmission over the internet or electronic storage is 100% secure.
      </p>
      <br />
      <p className="text-sm">
        <strong>Changes to This Privacy Policy:</strong> We reserve the right to update our Privacy Policy. Any changes
        will be posted on this page.
      </p>
      <br />
      <p className="text-sm">
        By using our website, you agree to the terms outlined in this Privacy Policy. If you have any questions or
        concerns, please contact us at privacy@dummy.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
