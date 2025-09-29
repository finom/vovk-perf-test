import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrjs")
export default class HrjController {
  @operation({
    summary: "Get Hrjs",
  })
  @get()
  static getHrjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrj",
  })
  @post("{id}")
  static createHrj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
