import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzqs")
export default class JzqController {
  @operation({
    summary: "Get Jzqs",
  })
  @get()
  static getJzqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzq",
  })
  @post("{id}")
  static createJzq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
