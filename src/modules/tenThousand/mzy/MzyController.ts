import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzies")
export default class MzyController {
  @operation({
    summary: "Get Mzies",
  })
  @get()
  static getMzies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzy",
  })
  @post("{id}")
  static createMzy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
