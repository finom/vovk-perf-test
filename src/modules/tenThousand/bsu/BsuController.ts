import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsus")
export default class BsuController {
  @operation({
    summary: "Get Bsus",
  })
  @get()
  static getBsus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsu",
  })
  @post("{id}")
  static createBsu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
