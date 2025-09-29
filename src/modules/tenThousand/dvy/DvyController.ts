import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvies")
export default class DvyController {
  @operation({
    summary: "Get Dvies",
  })
  @get()
  static getDvies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvy",
  })
  @post("{id}")
  static createDvy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
