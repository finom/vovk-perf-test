import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqjs")
export default class IqjController {
  @operation({
    summary: "Get Iqjs",
  })
  @get()
  static getIqjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqj",
  })
  @post("{id}")
  static createIqj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
