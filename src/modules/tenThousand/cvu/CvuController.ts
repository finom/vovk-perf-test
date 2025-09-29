import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvus")
export default class CvuController {
  @operation({
    summary: "Get Cvus",
  })
  @get()
  static getCvus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvu",
  })
  @post("{id}")
  static createCvu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
