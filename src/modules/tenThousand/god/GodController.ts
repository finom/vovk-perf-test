import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gods")
export default class GodController {
  @operation({
    summary: "Get Gods",
  })
  @get()
  static getGods = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create God",
  })
  @post("{id}")
  static createGod = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
