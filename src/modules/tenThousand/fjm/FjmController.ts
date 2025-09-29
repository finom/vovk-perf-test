import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjms")
export default class FjmController {
  @operation({
    summary: "Get Fjms",
  })
  @get()
  static getFjms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjm",
  })
  @post("{id}")
  static createFjm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
