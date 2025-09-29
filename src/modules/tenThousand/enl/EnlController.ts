import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enls")
export default class EnlController {
  @operation({
    summary: "Get Enls",
  })
  @get()
  static getEnls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Enl",
  })
  @post("{id}")
  static createEnl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
