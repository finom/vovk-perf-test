import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvvs")
export default class CvvController {
  @operation({
    summary: "Get Cvvs",
  })
  @get()
  static getCvvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvv",
  })
  @post("{id}")
  static createCvv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
