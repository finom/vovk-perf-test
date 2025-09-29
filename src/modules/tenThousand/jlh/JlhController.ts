import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlhs")
export default class JlhController {
  @operation({
    summary: "Get Jlhs",
  })
  @get()
  static getJlhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlh",
  })
  @post("{id}")
  static createJlh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
