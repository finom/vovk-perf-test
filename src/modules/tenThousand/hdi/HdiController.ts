import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdis")
export default class HdiController {
  @operation({
    summary: "Get Hdis",
  })
  @get()
  static getHdis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdi",
  })
  @post("{id}")
  static createHdi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
