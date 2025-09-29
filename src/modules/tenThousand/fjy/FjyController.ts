import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjies")
export default class FjyController {
  @operation({
    summary: "Get Fjies",
  })
  @get()
  static getFjies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjy",
  })
  @post("{id}")
  static createFjy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
