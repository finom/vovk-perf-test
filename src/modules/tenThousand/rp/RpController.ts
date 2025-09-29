import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rps")
export default class RpController {
  @operation({
    summary: "Get Rps",
  })
  @get()
  static getRps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rp",
  })
  @post("{id}")
  static createRp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
