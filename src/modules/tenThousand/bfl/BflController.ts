import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfls")
export default class BflController {
  @operation({
    summary: "Get Bfls",
  })
  @get()
  static getBfls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfl",
  })
  @post("{id}")
  static createBfl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
