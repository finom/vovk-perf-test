import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrzs")
export default class JrzController {
  @operation({
    summary: "Get Jrzs",
  })
  @get()
  static getJrzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrz",
  })
  @post("{id}")
  static createJrz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
