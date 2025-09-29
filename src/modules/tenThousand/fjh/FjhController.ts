import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjhs")
export default class FjhController {
  @operation({
    summary: "Get Fjhs",
  })
  @get()
  static getFjhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjh",
  })
  @post("{id}")
  static createFjh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
