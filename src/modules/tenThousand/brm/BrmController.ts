import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brms")
export default class BrmController {
  @operation({
    summary: "Get Brms",
  })
  @get()
  static getBrms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brm",
  })
  @post("{id}")
  static createBrm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
