import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzms")
export default class JzmController {
  @operation({
    summary: "Get Jzms",
  })
  @get()
  static getJzms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzm",
  })
  @post("{id}")
  static createJzm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
