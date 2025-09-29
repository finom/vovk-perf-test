import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifls")
export default class IflController {
  @operation({
    summary: "Get Ifls",
  })
  @get()
  static getIfls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifl",
  })
  @post("{id}")
  static createIfl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
