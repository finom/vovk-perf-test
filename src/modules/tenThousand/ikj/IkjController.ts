import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikjs")
export default class IkjController {
  @operation({
    summary: "Get Ikjs",
  })
  @get()
  static getIkjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikj",
  })
  @post("{id}")
  static createIkj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
