import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxes")
export default class JxeController {
  @operation({
    summary: "Get Jxes",
  })
  @get()
  static getJxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxe",
  })
  @post("{id}")
  static createJxe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
