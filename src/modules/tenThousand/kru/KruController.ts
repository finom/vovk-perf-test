import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krus")
export default class KruController {
  @operation({
    summary: "Get Krus",
  })
  @get()
  static getKrus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kru",
  })
  @post("{id}")
  static createKru = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
