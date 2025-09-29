import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwjs")
export default class KwjController {
  @operation({
    summary: "Get Kwjs",
  })
  @get()
  static getKwjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwj",
  })
  @post("{id}")
  static createKwj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
