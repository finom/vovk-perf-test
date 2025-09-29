import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itxes")
export default class ItxController {
  @operation({
    summary: "Get Itxes",
  })
  @get()
  static getItxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itx",
  })
  @post("{id}")
  static createItx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
