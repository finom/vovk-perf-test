import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrps")
export default class HrpController {
  @operation({
    summary: "Get Hrps",
  })
  @get()
  static getHrps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrp",
  })
  @post("{id}")
  static createHrp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
