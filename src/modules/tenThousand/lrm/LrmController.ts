import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrms")
export default class LrmController {
  @operation({
    summary: "Get Lrms",
  })
  @get()
  static getLrms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrm",
  })
  @post("{id}")
  static createLrm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
