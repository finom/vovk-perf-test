import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfes")
export default class JfeController {
  @operation({
    summary: "Get Jfes",
  })
  @get()
  static getJfes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfe",
  })
  @post("{id}")
  static createJfe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
