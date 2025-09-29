import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwds")
export default class FwdController {
  @operation({
    summary: "Get Fwds",
  })
  @get()
  static getFwds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwd",
  })
  @post("{id}")
  static createFwd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
