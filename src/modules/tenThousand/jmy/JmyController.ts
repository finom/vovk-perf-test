import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmies")
export default class JmyController {
  @operation({
    summary: "Get Jmies",
  })
  @get()
  static getJmies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmy",
  })
  @post("{id}")
  static createJmy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
