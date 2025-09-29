import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdfs")
export default class CdfController {
  @operation({
    summary: "Get Cdfs",
  })
  @get()
  static getCdfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdf",
  })
  @post("{id}")
  static createCdf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
