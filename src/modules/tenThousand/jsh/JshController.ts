import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jshes")
export default class JshController {
  @operation({
    summary: "Get Jshes",
  })
  @get()
  static getJshes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsh",
  })
  @post("{id}")
  static createJsh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
