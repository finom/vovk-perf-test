import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grgs")
export default class GrgController {
  @operation({
    summary: "Get Grgs",
  })
  @get()
  static getGrgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grg",
  })
  @post("{id}")
  static createGrg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
