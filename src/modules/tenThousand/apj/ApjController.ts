import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apjs")
export default class ApjController {
  @operation({
    summary: "Get Apjs",
  })
  @get()
  static getApjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apj",
  })
  @post("{id}")
  static createApj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
