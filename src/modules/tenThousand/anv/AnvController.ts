import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anvs")
export default class AnvController {
  @operation({
    summary: "Get Anvs",
  })
  @get()
  static getAnvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Anv",
  })
  @post("{id}")
  static createAnv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
