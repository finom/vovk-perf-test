import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byos")
export default class ByoController {
  @operation({
    summary: "Get Byos",
  })
  @get()
  static getByos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byo",
  })
  @post("{id}")
  static createByo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
