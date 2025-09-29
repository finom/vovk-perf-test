import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrws")
export default class HrwController {
  @operation({
    summary: "Get Hrws",
  })
  @get()
  static getHrws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrw",
  })
  @post("{id}")
  static createHrw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
