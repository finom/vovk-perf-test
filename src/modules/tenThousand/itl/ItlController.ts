import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itls")
export default class ItlController {
  @operation({
    summary: "Get Itls",
  })
  @get()
  static getItls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itl",
  })
  @post("{id}")
  static createItl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
