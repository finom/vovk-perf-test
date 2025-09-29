import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzis")
export default class JziController {
  @operation({
    summary: "Get Jzis",
  })
  @get()
  static getJzis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzi",
  })
  @post("{id}")
  static createJzi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
