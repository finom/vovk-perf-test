import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhfs")
export default class MhfController {
  @operation({
    summary: "Get Mhfs",
  })
  @get()
  static getMhfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhf",
  })
  @post("{id}")
  static createMhf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
