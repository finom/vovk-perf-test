import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyc")
export default class KycController {
  @operation({
    summary: "Get Kyc",
  })
  @get()
  static getKyc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyc",
  })
  @post("{id}")
  static createKyc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
