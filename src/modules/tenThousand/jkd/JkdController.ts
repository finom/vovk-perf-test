import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkds")
export default class JkdController {
  @operation({
    summary: "Get Jkds",
  })
  @get()
  static getJkds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkd",
  })
  @post("{id}")
  static createJkd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
