import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbds")
export default class JbdController {
  @operation({
    summary: "Get Jbds",
  })
  @get()
  static getJbds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbd",
  })
  @post("{id}")
  static createJbd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
