import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcts")
export default class KctController {
  @operation({
    summary: "Get Kcts",
  })
  @get()
  static getKcts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kct",
  })
  @post("{id}")
  static createKct = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
