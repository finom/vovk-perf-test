import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcls")
export default class JclController {
  @operation({
    summary: "Get Jcls",
  })
  @get()
  static getJcls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcl",
  })
  @post("{id}")
  static createJcl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
