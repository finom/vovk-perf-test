import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwvs")
export default class KwvController {
  @operation({
    summary: "Get Kwvs",
  })
  @get()
  static getKwvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwv",
  })
  @post("{id}")
  static createKwv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
