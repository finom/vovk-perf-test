import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvs")
export default class CvController {
  @operation({
    summary: "Get Cvs",
  })
  @get()
  static getCvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cv",
  })
  @post("{id}")
  static createCv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
