import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkxes")
export default class DkxController {
  @operation({
    summary: "Get Dkxes",
  })
  @get()
  static getDkxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkx",
  })
  @post("{id}")
  static createDkx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
