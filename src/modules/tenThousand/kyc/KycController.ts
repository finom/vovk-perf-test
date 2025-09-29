import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kycs")
export default class KycController {
  @operation({
    summary: "Get Kycs",
  })
  @get()
  static getKycs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyc",
  })
  @post("{id}")
  static createKyc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
