import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvts")
export default class CvtController {
  @operation({
    summary: "Get Cvts",
  })
  @get()
  static getCvts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvt",
  })
  @post("{id}")
  static createCvt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
