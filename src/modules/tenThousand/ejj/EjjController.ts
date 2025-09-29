import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejjs")
export default class EjjController {
  @operation({
    summary: "Get Ejjs",
  })
  @get()
  static getEjjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejj",
  })
  @post("{id}")
  static createEjj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
