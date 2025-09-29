import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrxes")
export default class HrxController {
  @operation({
    summary: "Get Hrxes",
  })
  @get()
  static getHrxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrx",
  })
  @post("{id}")
  static createHrx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
