import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxes")
export default class GxeController {
  @operation({
    summary: "Get Gxes",
  })
  @get()
  static getGxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxe",
  })
  @post("{id}")
  static createGxe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
