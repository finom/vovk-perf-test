import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccts")
export default class CctController {
  @operation({
    summary: "Get Ccts",
  })
  @get()
  static getCcts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cct",
  })
  @post("{id}")
  static createCct = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
