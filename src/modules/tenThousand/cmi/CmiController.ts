import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmis")
export default class CmiController {
  @operation({
    summary: "Get Cmis",
  })
  @get()
  static getCmis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmi",
  })
  @post("{id}")
  static createCmi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
