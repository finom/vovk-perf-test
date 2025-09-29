import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyxes")
export default class IyxController {
  @operation({
    summary: "Get Iyxes",
  })
  @get()
  static getIyxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyx",
  })
  @post("{id}")
  static createIyx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
