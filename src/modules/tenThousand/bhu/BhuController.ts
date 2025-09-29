import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhus")
export default class BhuController {
  @operation({
    summary: "Get Bhus",
  })
  @get()
  static getBhus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhu",
  })
  @post("{id}")
  static createBhu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
