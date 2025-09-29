import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpxes")
export default class DpxController {
  @operation({
    summary: "Get Dpxes",
  })
  @get()
  static getDpxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpx",
  })
  @post("{id}")
  static createDpx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
