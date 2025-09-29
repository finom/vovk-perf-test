import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clls")
export default class CllController {
  @operation({
    summary: "Get Clls",
  })
  @get()
  static getClls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cll",
  })
  @post("{id}")
  static createCll = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
