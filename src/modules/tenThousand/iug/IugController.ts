import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iugs")
export default class IugController {
  @operation({
    summary: "Get Iugs",
  })
  @get()
  static getIugs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iug",
  })
  @post("{id}")
  static createIug = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
