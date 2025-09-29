import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdbs")
export default class FdbController {
  @operation({
    summary: "Get Fdbs",
  })
  @get()
  static getFdbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdb",
  })
  @post("{id}")
  static createFdb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
