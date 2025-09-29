import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfls")
export default class HflController {
  @operation({
    summary: "Get Hfls",
  })
  @get()
  static getHfls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfl",
  })
  @post("{id}")
  static createHfl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
