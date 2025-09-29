import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjws")
export default class FjwController {
  @operation({
    summary: "Get Fjws",
  })
  @get()
  static getFjws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjw",
  })
  @post("{id}")
  static createFjw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
