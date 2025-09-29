import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxds")
export default class HxdController {
  @operation({
    summary: "Get Hxds",
  })
  @get()
  static getHxds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxd",
  })
  @post("{id}")
  static createHxd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
