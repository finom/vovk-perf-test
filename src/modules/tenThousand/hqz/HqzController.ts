import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqzs")
export default class HqzController {
  @operation({
    summary: "Get Hqzs",
  })
  @get()
  static getHqzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqz",
  })
  @post("{id}")
  static createHqz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
