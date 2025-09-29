import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzns")
export default class JznController {
  @operation({
    summary: "Get Jzns",
  })
  @get()
  static getJzns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzn",
  })
  @post("{id}")
  static createJzn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
