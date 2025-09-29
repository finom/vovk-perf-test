import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzus")
export default class MzuController {
  @operation({
    summary: "Get Mzus",
  })
  @get()
  static getMzus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzu",
  })
  @post("{id}")
  static createMzu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
