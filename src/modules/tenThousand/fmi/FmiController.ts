import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmis")
export default class FmiController {
  @operation({
    summary: "Get Fmis",
  })
  @get()
  static getFmis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmi",
  })
  @post("{id}")
  static createFmi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
