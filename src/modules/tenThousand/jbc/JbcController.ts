import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbcs")
export default class JbcController {
  @operation({
    summary: "Get Jbcs",
  })
  @get()
  static getJbcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbc",
  })
  @post("{id}")
  static createJbc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
