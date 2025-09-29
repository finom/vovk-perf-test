import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhls")
export default class NhlController {
  @operation({
    summary: "Get Nhls",
  })
  @get()
  static getNhls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhl",
  })
  @post("{id}")
  static createNhl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
