import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhls")
export default class LhlController {
  @operation({
    summary: "Get Lhls",
  })
  @get()
  static getLhls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhl",
  })
  @post("{id}")
  static createLhl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
