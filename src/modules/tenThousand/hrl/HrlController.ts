import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrls")
export default class HrlController {
  @operation({
    summary: "Get Hrls",
  })
  @get()
  static getHrls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrl",
  })
  @post("{id}")
  static createHrl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
