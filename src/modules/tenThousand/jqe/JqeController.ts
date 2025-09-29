import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqes")
export default class JqeController {
  @operation({
    summary: "Get Jqes",
  })
  @get()
  static getJqes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqe",
  })
  @post("{id}")
  static createJqe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
