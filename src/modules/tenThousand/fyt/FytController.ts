import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyts")
export default class FytController {
  @operation({
    summary: "Get Fyts",
  })
  @get()
  static getFyts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyt",
  })
  @post("{id}")
  static createFyt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
