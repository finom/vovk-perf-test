import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cojs")
export default class CojController {
  @operation({
    summary: "Get Cojs",
  })
  @get()
  static getCojs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Coj",
  })
  @post("{id}")
  static createCoj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
