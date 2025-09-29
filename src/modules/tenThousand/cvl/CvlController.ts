import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvls")
export default class CvlController {
  @operation({
    summary: "Get Cvls",
  })
  @get()
  static getCvls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvl",
  })
  @post("{id}")
  static createCvl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
