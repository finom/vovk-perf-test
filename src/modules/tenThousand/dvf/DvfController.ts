import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvfs")
export default class DvfController {
  @operation({
    summary: "Get Dvfs",
  })
  @get()
  static getDvfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvf",
  })
  @post("{id}")
  static createDvf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
