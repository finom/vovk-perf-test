import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jihs")
export default class JihController {
  @operation({
    summary: "Get Jihs",
  })
  @get()
  static getJihs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jih",
  })
  @post("{id}")
  static createJih = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
