import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flis")
export default class FliController {
  @operation({
    summary: "Get Flis",
  })
  @get()
  static getFlis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fli",
  })
  @post("{id}")
  static createFli = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
