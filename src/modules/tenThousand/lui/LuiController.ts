import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("luis")
export default class LuiController {
  @operation({
    summary: "Get Luis",
  })
  @get()
  static getLuis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lui",
  })
  @post("{id}")
  static createLui = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
