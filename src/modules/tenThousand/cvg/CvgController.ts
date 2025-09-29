import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvgs")
export default class CvgController {
  @operation({
    summary: "Get Cvgs",
  })
  @get()
  static getCvgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvg",
  })
  @post("{id}")
  static createCvg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
