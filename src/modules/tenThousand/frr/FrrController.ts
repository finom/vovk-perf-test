import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frrs")
export default class FrrController {
  @operation({
    summary: "Get Frrs",
  })
  @get()
  static getFrrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Frr",
  })
  @post("{id}")
  static createFrr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
