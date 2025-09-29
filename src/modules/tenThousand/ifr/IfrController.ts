import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifrs")
export default class IfrController {
  @operation({
    summary: "Get Ifrs",
  })
  @get()
  static getIfrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifr",
  })
  @post("{id}")
  static createIfr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
