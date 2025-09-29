import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jies")
export default class JieController {
  @operation({
    summary: "Get Jies",
  })
  @get()
  static getJies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jie",
  })
  @post("{id}")
  static createJie = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
