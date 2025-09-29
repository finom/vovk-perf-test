import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjrs")
export default class FjrController {
  @operation({
    summary: "Get Fjrs",
  })
  @get()
  static getFjrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjr",
  })
  @post("{id}")
  static createFjr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
