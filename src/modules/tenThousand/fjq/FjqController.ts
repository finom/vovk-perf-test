import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjqs")
export default class FjqController {
  @operation({
    summary: "Get Fjqs",
  })
  @get()
  static getFjqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjq",
  })
  @post("{id}")
  static createFjq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
