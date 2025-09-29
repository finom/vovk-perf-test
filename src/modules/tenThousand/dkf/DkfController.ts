import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkfs")
export default class DkfController {
  @operation({
    summary: "Get Dkfs",
  })
  @get()
  static getDkfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkf",
  })
  @post("{id}")
  static createDkf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
