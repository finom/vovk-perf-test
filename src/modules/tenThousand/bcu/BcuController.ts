import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcus")
export default class BcuController {
  @operation({
    summary: "Get Bcus",
  })
  @get()
  static getBcus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcu",
  })
  @post("{id}")
  static createBcu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
