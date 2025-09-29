import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixjs")
export default class IxjController {
  @operation({
    summary: "Get Ixjs",
  })
  @get()
  static getIxjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixj",
  })
  @post("{id}")
  static createIxj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
