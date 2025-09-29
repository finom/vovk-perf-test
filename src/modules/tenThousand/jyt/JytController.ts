import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyts")
export default class JytController {
  @operation({
    summary: "Get Jyts",
  })
  @get()
  static getJyts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyt",
  })
  @post("{id}")
  static createJyt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
