import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsls")
export default class LslController {
  @operation({
    summary: "Get Lsls",
  })
  @get()
  static getLsls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsl",
  })
  @post("{id}")
  static createLsl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
