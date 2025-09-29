import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grts")
export default class GrtController {
  @operation({
    summary: "Get Grts",
  })
  @get()
  static getGrts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grt",
  })
  @post("{id}")
  static createGrt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
