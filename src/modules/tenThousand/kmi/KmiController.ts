import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmis")
export default class KmiController {
  @operation({
    summary: "Get Kmis",
  })
  @get()
  static getKmis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmi",
  })
  @post("{id}")
  static createKmi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
