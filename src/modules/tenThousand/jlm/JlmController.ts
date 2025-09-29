import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlms")
export default class JlmController {
  @operation({
    summary: "Get Jlms",
  })
  @get()
  static getJlms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlm",
  })
  @post("{id}")
  static createJlm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
