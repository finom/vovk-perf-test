import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jls")
export default class JlsController {
  @operation({
    summary: "Get Jls",
  })
  @get()
  static getJls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jls",
  })
  @post("{id}")
  static createJls = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
