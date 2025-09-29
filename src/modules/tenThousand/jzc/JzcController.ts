import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzcs")
export default class JzcController {
  @operation({
    summary: "Get Jzcs",
  })
  @get()
  static getJzcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzc",
  })
  @post("{id}")
  static createJzc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
