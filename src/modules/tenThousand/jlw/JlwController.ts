import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlws")
export default class JlwController {
  @operation({
    summary: "Get Jlws",
  })
  @get()
  static getJlws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlw",
  })
  @post("{id}")
  static createJlw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
