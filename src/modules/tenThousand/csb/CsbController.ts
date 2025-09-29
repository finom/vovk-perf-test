import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csbs")
export default class CsbController {
  @operation({
    summary: "Get Csbs",
  })
  @get()
  static getCsbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csb",
  })
  @post("{id}")
  static createCsb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
