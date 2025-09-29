import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enos")
export default class EnoController {
  @operation({
    summary: "Get Enos",
  })
  @get()
  static getEnos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eno",
  })
  @post("{id}")
  static createEno = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
