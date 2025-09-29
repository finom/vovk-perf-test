import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcus")
export default class GcuController {
  @operation({
    summary: "Get Gcus",
  })
  @get()
  static getGcus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcu",
  })
  @post("{id}")
  static createGcu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
