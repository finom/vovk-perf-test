import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fivs")
export default class FivController {
  @operation({
    summary: "Get Fivs",
  })
  @get()
  static getFivs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fiv",
  })
  @post("{id}")
  static createFiv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
