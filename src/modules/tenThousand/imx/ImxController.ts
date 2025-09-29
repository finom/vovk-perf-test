import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imxes")
export default class ImxController {
  @operation({
    summary: "Get Imxes",
  })
  @get()
  static getImxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imx",
  })
  @post("{id}")
  static createImx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
