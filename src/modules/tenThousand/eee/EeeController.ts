import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eees")
export default class EeeController {
  @operation({
    summary: "Get Eees",
  })
  @get()
  static getEees = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eee",
  })
  @post("{id}")
  static createEee = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
