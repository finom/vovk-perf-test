import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anls")
export default class AnlController {
  @operation({
    summary: "Get Anls",
  })
  @get()
  static getAnls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Anl",
  })
  @post("{id}")
  static createAnl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
