import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcts")
export default class GctController {
  @operation({
    summary: "Get Gcts",
  })
  @get()
  static getGcts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gct",
  })
  @post("{id}")
  static createGct = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
