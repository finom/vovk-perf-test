import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkes")
export default class LkeController {
  @operation({
    summary: "Get Lkes",
  })
  @get()
  static getLkes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lke",
  })
  @post("{id}")
  static createLke = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
