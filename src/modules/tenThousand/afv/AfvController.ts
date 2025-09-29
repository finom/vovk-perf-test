import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afvs")
export default class AfvController {
  @operation({
    summary: "Get Afvs",
  })
  @get()
  static getAfvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afv",
  })
  @post("{id}")
  static createAfv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
