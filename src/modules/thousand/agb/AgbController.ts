import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agbs")
export default class AgbController {
  @operation({
    summary: "Get Agbs",
  })
  @get()
  static getAgbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agb",
  })
  @post("{id}")
  static createAgb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
