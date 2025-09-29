import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwns")
export default class FwnController {
  @operation({
    summary: "Get Fwns",
  })
  @get()
  static getFwns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwn",
  })
  @post("{id}")
  static createFwn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
