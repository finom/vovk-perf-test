import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhfs")
export default class LhfController {
  @operation({
    summary: "Get Lhfs",
  })
  @get()
  static getLhfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhf",
  })
  @post("{id}")
  static createLhf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
