import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjjs")
export default class FjjController {
  @operation({
    summary: "Get Fjjs",
  })
  @get()
  static getFjjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjj",
  })
  @post("{id}")
  static createFjj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
