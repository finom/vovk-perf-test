import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwis")
export default class KwiController {
  @operation({
    summary: "Get Kwis",
  })
  @get()
  static getKwis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwi",
  })
  @post("{id}")
  static createKwi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
