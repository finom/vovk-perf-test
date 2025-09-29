import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kugs")
export default class KugController {
  @operation({
    summary: "Get Kugs",
  })
  @get()
  static getKugs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kug",
  })
  @post("{id}")
  static createKug = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
