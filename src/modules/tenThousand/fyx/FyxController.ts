import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyxes")
export default class FyxController {
  @operation({
    summary: "Get Fyxes",
  })
  @get()
  static getFyxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyx",
  })
  @post("{id}")
  static createFyx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
