import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtxes")
export default class JtxController {
  @operation({
    summary: "Get Jtxes",
  })
  @get()
  static getJtxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtx",
  })
  @post("{id}")
  static createJtx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
