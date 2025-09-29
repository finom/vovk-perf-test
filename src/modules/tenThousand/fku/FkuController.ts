import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkus")
export default class FkuController {
  @operation({
    summary: "Get Fkus",
  })
  @get()
  static getFkus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fku",
  })
  @post("{id}")
  static createFku = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
