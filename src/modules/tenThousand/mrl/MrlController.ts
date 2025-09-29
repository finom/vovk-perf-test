import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrls")
export default class MrlController {
  @operation({
    summary: "Get Mrls",
  })
  @get()
  static getMrls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrl",
  })
  @post("{id}")
  static createMrl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
