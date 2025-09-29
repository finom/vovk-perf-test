import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbhs")
export default class HbhController {
  @operation({
    summary: "Get Hbhs",
  })
  @get()
  static getHbhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbh",
  })
  @post("{id}")
  static createHbh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
