import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewps")
export default class EwpController {
  @operation({
    summary: "Get Ewps",
  })
  @get()
  static getEwps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewp",
  })
  @post("{id}")
  static createEwp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
