import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrms")
export default class HrmController {
  @operation({
    summary: "Get Hrms",
  })
  @get()
  static getHrms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrm",
  })
  @post("{id}")
  static createHrm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
