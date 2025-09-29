import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffs")
export default class FfsController {
  @operation({
    summary: "Get Ffs",
  })
  @get()
  static getFfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffs",
  })
  @post("{id}")
  static createFfs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
