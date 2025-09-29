import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcts")
export default class JctController {
  @operation({
    summary: "Get Jcts",
  })
  @get()
  static getJcts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jct",
  })
  @post("{id}")
  static createJct = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
