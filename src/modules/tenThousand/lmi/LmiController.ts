import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmis")
export default class LmiController {
  @operation({
    summary: "Get Lmis",
  })
  @get()
  static getLmis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmi",
  })
  @post("{id}")
  static createLmi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
