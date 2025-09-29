import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apvs")
export default class ApvController {
  @operation({
    summary: "Get Apvs",
  })
  @get()
  static getApvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apv",
  })
  @post("{id}")
  static createApv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
