import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnas")
export default class LnaController {
  @operation({
    summary: "Get Lnas",
  })
  @get()
  static getLnas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lna",
  })
  @post("{id}")
  static createLna = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
