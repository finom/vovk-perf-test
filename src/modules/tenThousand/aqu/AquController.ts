import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqus")
export default class AquController {
  @operation({
    summary: "Get Aqus",
  })
  @get()
  static getAqus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqu",
  })
  @post("{id}")
  static createAqu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
