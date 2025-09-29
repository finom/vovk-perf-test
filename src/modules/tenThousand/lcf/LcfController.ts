import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcfs")
export default class LcfController {
  @operation({
    summary: "Get Lcfs",
  })
  @get()
  static getLcfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcf",
  })
  @post("{id}")
  static createLcf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
