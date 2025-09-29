import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzvs")
export default class HzvController {
  @operation({
    summary: "Get Hzvs",
  })
  @get()
  static getHzvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzv",
  })
  @post("{id}")
  static createHzv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
