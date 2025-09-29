import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clws")
export default class ClwController {
  @operation({
    summary: "Get Clws",
  })
  @get()
  static getClws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clw",
  })
  @post("{id}")
  static createClw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
