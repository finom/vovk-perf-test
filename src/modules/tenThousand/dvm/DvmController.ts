import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvms")
export default class DvmController {
  @operation({
    summary: "Get Dvms",
  })
  @get()
  static getDvms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvm",
  })
  @post("{id}")
  static createDvm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
