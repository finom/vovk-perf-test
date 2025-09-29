import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iifs")
export default class IifController {
  @operation({
    summary: "Get Iifs",
  })
  @get()
  static getIifs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iif",
  })
  @post("{id}")
  static createIif = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
