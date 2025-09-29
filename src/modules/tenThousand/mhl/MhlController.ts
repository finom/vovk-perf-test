import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhls")
export default class MhlController {
  @operation({
    summary: "Get Mhls",
  })
  @get()
  static getMhls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhl",
  })
  @post("{id}")
  static createMhl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
