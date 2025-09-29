import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lehs")
export default class LehController {
  @operation({
    summary: "Get Lehs",
  })
  @get()
  static getLehs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Leh",
  })
  @post("{id}")
  static createLeh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
