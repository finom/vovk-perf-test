import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvws")
export default class CvwController {
  @operation({
    summary: "Get Cvws",
  })
  @get()
  static getCvws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvw",
  })
  @post("{id}")
  static createCvw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
