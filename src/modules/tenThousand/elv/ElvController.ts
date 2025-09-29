import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elvs")
export default class ElvController {
  @operation({
    summary: "Get Elvs",
  })
  @get()
  static getElvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elv",
  })
  @post("{id}")
  static createElv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
