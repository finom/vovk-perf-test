import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhcs")
export default class MhcController {
  @operation({
    summary: "Get Mhcs",
  })
  @get()
  static getMhcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhc",
  })
  @post("{id}")
  static createMhc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
