import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvzs")
export default class CvzController {
  @operation({
    summary: "Get Cvzs",
  })
  @get()
  static getCvzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvz",
  })
  @post("{id}")
  static createCvz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
