import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhgs")
export default class MhgController {
  @operation({
    summary: "Get Mhgs",
  })
  @get()
  static getMhgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhg",
  })
  @post("{id}")
  static createMhg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
