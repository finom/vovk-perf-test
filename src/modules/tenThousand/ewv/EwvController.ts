import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewvs")
export default class EwvController {
  @operation({
    summary: "Get Ewvs",
  })
  @get()
  static getEwvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewv",
  })
  @post("{id}")
  static createEwv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
