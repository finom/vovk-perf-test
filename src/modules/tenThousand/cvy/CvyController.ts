import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvies")
export default class CvyController {
  @operation({
    summary: "Get Cvies",
  })
  @get()
  static getCvies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvy",
  })
  @post("{id}")
  static createCvy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
