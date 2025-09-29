import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhs")
export default class FhsController {
  @operation({
    summary: "Get Fhs",
  })
  @get()
  static getFhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhs",
  })
  @post("{id}")
  static createFhs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
