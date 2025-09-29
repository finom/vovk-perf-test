import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvbs")
export default class CvbController {
  @operation({
    summary: "Get Cvbs",
  })
  @get()
  static getCvbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvb",
  })
  @post("{id}")
  static createCvb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
