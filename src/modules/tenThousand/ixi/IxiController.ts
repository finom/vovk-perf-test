import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixis")
export default class IxiController {
  @operation({
    summary: "Get Ixis",
  })
  @get()
  static getIxis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixi",
  })
  @post("{id}")
  static createIxi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
