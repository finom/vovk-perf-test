import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chjs")
export default class ChjController {
  @operation({
    summary: "Get Chjs",
  })
  @get()
  static getChjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chj",
  })
  @post("{id}")
  static createChj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
