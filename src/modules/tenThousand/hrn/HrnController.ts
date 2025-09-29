import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrns")
export default class HrnController {
  @operation({
    summary: "Get Hrns",
  })
  @get()
  static getHrns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrn",
  })
  @post("{id}")
  static createHrn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
