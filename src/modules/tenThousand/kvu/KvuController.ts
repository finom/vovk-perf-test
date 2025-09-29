import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvus")
export default class KvuController {
  @operation({
    summary: "Get Kvus",
  })
  @get()
  static getKvus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvu",
  })
  @post("{id}")
  static createKvu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
