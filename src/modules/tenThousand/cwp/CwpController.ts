import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwps")
export default class CwpController {
  @operation({
    summary: "Get Cwps",
  })
  @get()
  static getCwps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwp",
  })
  @post("{id}")
  static createCwp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
