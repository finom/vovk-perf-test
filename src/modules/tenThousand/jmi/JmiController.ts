import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmis")
export default class JmiController {
  @operation({
    summary: "Get Jmis",
  })
  @get()
  static getJmis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmi",
  })
  @post("{id}")
  static createJmi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
