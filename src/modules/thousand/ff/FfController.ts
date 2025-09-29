import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffs")
export default class FfController {
  @operation({
    summary: "Get Ffs",
  })
  @get()
  static getFfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ff",
  })
  @post("{id}")
  static createFf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
