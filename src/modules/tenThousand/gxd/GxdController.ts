import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxds")
export default class GxdController {
  @operation({
    summary: "Get Gxds",
  })
  @get()
  static getGxds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxd",
  })
  @post("{id}")
  static createGxd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
