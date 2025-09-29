import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("his")
export default class HiController {
  @operation({
    summary: "Get His",
  })
  @get()
  static getHis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hi",
  })
  @post("{id}")
  static createHi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
