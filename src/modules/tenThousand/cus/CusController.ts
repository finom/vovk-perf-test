import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cuses")
export default class CusController {
  @operation({
    summary: "Get Cuses",
  })
  @get()
  static getCuses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cus",
  })
  @post("{id}")
  static createCus = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
