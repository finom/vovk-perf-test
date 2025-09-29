import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrxes")
export default class JrxController {
  @operation({
    summary: "Get Jrxes",
  })
  @get()
  static getJrxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrx",
  })
  @post("{id}")
  static createJrx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
