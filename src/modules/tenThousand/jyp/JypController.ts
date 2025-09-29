import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyps")
export default class JypController {
  @operation({
    summary: "Get Jyps",
  })
  @get()
  static getJyps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyp",
  })
  @post("{id}")
  static createJyp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
