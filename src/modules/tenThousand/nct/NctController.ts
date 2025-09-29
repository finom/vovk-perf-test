import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncts")
export default class NctController {
  @operation({
    summary: "Get Ncts",
  })
  @get()
  static getNcts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nct",
  })
  @post("{id}")
  static createNct = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
