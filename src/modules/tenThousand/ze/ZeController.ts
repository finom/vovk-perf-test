import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zes")
export default class ZeController {
  @operation({
    summary: "Get Zes",
  })
  @get()
  static getZes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ze",
  })
  @post("{id}")
  static createZe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
