import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abhs")
export default class AbhController {
  @operation({
    summary: "Get Abhs",
  })
  @get()
  static getAbhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abh",
  })
  @post("{id}")
  static createAbh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
