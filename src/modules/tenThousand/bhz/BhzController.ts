import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhzs")
export default class BhzController {
  @operation({
    summary: "Get Bhzs",
  })
  @get()
  static getBhzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhz",
  })
  @post("{id}")
  static createBhz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
