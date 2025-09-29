import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jans")
export default class JanController {
  @operation({
    summary: "Get Jans",
  })
  @get()
  static getJans = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jan",
  })
  @post("{id}")
  static createJan = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
