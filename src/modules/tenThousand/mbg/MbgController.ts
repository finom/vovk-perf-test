import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbgs")
export default class MbgController {
  @operation({
    summary: "Get Mbgs",
  })
  @get()
  static getMbgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbg",
  })
  @post("{id}")
  static createMbg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
