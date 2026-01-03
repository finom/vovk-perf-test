import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kycs")
export default class KycController {
  @operation({
    summary: "Get Kycs",
  })
  @get()
  static getKycs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyc",
  })
  @post("{id}")
  static createKyc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
