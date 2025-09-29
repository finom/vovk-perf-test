import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhxes")
export default class JhxController {
  @operation({
    summary: "Get Jhxes",
  })
  @get()
  static getJhxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhx",
  })
  @post("{id}")
  static createJhx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
