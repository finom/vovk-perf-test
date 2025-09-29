import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhs")
export default class FhController {
  @operation({
    summary: "Get Fhs",
  })
  @get()
  static getFhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fh",
  })
  @post("{id}")
  static createFh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
