import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icjs")
export default class IcjController {
  @operation({
    summary: "Get Icjs",
  })
  @get()
  static getIcjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Icj",
  })
  @post("{id}")
  static createIcj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
