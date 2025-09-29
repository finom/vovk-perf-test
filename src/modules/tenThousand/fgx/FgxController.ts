import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgxes")
export default class FgxController {
  @operation({
    summary: "Get Fgxes",
  })
  @get()
  static getFgxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgx",
  })
  @post("{id}")
  static createFgx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
