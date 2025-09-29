import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcts")
export default class HctController {
  @operation({
    summary: "Get Hcts",
  })
  @get()
  static getHcts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hct",
  })
  @post("{id}")
  static createHct = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
