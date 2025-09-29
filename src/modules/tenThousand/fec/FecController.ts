import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fecs")
export default class FecController {
  @operation({
    summary: "Get Fecs",
  })
  @get()
  static getFecs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fec",
  })
  @post("{id}")
  static createFec = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
