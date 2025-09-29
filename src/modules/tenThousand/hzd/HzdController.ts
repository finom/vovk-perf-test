import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzds")
export default class HzdController {
  @operation({
    summary: "Get Hzds",
  })
  @get()
  static getHzds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzd",
  })
  @post("{id}")
  static createHzd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
