import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcs")
export default class McController {
  @operation({
    summary: "Get Mcs",
  })
  @get()
  static getMcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mc",
  })
  @post("{id}")
  static createMc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
