import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqis")
export default class JqiController {
  @operation({
    summary: "Get Jqis",
  })
  @get()
  static getJqis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqi",
  })
  @post("{id}")
  static createJqi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
