import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgps")
export default class FgpController {
  @operation({
    summary: "Get Fgps",
  })
  @get()
  static getFgps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgp",
  })
  @post("{id}")
  static createFgp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
