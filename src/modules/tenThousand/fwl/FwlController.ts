import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwls")
export default class FwlController {
  @operation({
    summary: "Get Fwls",
  })
  @get()
  static getFwls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwl",
  })
  @post("{id}")
  static createFwl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
