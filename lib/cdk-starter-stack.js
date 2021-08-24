"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkStarterStack = void 0;
const kms = __importStar(require("@aws-cdk/aws-kms"));
const s3 = __importStar(require("@aws-cdk/aws-s3"));
const cdk = __importStar(require("@aws-cdk/core"));
class CdkStarterStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const key = new kms.Key(this, 'cdk-kms-key', {
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            pendingWindow: cdk.Duration.days(7),
            alias: 'alias/mykey',
            description: 'KMS key for encrypting the objects in an S3 bucket',
            enableKeyRotation: false,
        });
        const s3Bucket = new s3.Bucket(this, 'cdk-kms-jhidalgo3', {
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            encryption: s3.BucketEncryption.KMS,
            encryptionKey: key,
        });
        new cdk.CfnOutput(this, 'key-arn', {
            value: key.keyArn,
        });
        new cdk.CfnOutput(this, 'bucket-name', {
            value: s3Bucket.bucketName,
        });
    }
}
exports.CdkStarterStack = CdkStarterStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXN0YXJ0ZXItc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstc3RhcnRlci1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQXdDO0FBQ3hDLG9EQUFzQztBQUN0QyxtREFBcUM7QUFFckMsTUFBYSxlQUFnQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQzVDLFlBQVksS0FBYyxFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM1RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUMzQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPO1lBQ3hDLGFBQWEsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkMsS0FBSyxFQUFFLGFBQWE7WUFDcEIsV0FBVyxFQUFFLG9EQUFvRDtZQUNqRSxpQkFBaUIsRUFBRSxLQUFLO1NBQ3pCLENBQUMsQ0FBQztRQUVILE1BQU0sUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7WUFDeEQsYUFBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTztZQUN4QyxVQUFVLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEdBQUc7WUFFbkMsYUFBYSxFQUFFLEdBQUc7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUU7WUFDakMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNO1NBQ2xCLENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ3JDLEtBQUssRUFBRSxRQUFRLENBQUMsVUFBVTtTQUMzQixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUEzQkQsMENBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMga21zIGZyb20gJ0Bhd3MtY2RrL2F3cy1rbXMnO1xuaW1wb3J0ICogYXMgczMgZnJvbSAnQGF3cy1jZGsvYXdzLXMzJztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcblxuZXhwb3J0IGNsYXNzIENka1N0YXJ0ZXJTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQXBwLCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCBrZXkgPSBuZXcga21zLktleSh0aGlzLCAnY2RrLWttcy1rZXknLCB7XG4gICAgICByZW1vdmFsUG9saWN5OiBjZGsuUmVtb3ZhbFBvbGljeS5ERVNUUk9ZLFxuICAgICAgcGVuZGluZ1dpbmRvdzogY2RrLkR1cmF0aW9uLmRheXMoNyksXG4gICAgICBhbGlhczogJ2FsaWFzL215a2V5JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnS01TIGtleSBmb3IgZW5jcnlwdGluZyB0aGUgb2JqZWN0cyBpbiBhbiBTMyBidWNrZXQnLFxuICAgICAgZW5hYmxlS2V5Um90YXRpb246IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgczNCdWNrZXQgPSBuZXcgczMuQnVja2V0KHRoaXMsICdjZGsta21zLWpoaWRhbGdvMycsIHtcbiAgICAgIHJlbW92YWxQb2xpY3k6IGNkay5SZW1vdmFsUG9saWN5LkRFU1RST1ksXG4gICAgICBlbmNyeXB0aW9uOiBzMy5CdWNrZXRFbmNyeXB0aW9uLktNUyxcbiAgICAgIC8vIPCfkYcgZW5jcnlwdCB3aXRoIG91ciBLTVMga2V5XG4gICAgICBlbmNyeXB0aW9uS2V5OiBrZXksXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAna2V5LWFybicsIHtcbiAgICAgIHZhbHVlOiBrZXkua2V5QXJuLFxuICAgIH0pO1xuXG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ2J1Y2tldC1uYW1lJywge1xuICAgICAgdmFsdWU6IHMzQnVja2V0LmJ1Y2tldE5hbWUsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==