import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fngs")
export default class FngController {
  @operation({
    summary: "Get Fngs",
  })
  @get()
  static getFngs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fng",
  })
  @post("{id}")
  static createFng = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
