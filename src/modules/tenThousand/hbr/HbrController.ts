import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbrs")
export default class HbrController {
  @operation({
    summary: "Get Hbrs",
  })
  @get()
  static getHbrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbr",
  })
  @post("{id}")
  static createHbr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
