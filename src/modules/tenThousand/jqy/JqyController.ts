import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqies")
export default class JqyController {
  @operation({
    summary: "Get Jqies",
  })
  @get()
  static getJqies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqy",
  })
  @post("{id}")
  static createJqy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
