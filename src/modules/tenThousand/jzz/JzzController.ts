import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzzes")
export default class JzzController {
  @operation({
    summary: "Get Jzzes",
  })
  @get()
  static getJzzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzz",
  })
  @post("{id}")
  static createJzz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
