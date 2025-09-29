import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxes")
export default class JxController {
  @operation({
    summary: "Get Jxes",
  })
  @get()
  static getJxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jx",
  })
  @post("{id}")
  static createJx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
