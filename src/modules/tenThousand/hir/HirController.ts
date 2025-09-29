import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hirs")
export default class HirController {
  @operation({
    summary: "Get Hirs",
  })
  @get()
  static getHirs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hir",
  })
  @post("{id}")
  static createHir = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
