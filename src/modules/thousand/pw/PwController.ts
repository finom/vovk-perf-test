import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pws")
export default class PwController {
  @operation({
    summary: "Get Pws",
  })
  @get()
  static getPws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pw",
  })
  @post("{id}")
  static createPw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
