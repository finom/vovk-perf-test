import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjls")
export default class FjlController {
  @operation({
    summary: "Get Fjls",
  })
  @get()
  static getFjls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjl",
  })
  @post("{id}")
  static createFjl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
