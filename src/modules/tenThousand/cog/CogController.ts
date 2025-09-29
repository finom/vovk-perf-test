import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cogs")
export default class CogController {
  @operation({
    summary: "Get Cogs",
  })
  @get()
  static getCogs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cog",
  })
  @post("{id}")
  static createCog = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
