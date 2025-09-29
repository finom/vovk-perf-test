import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zus")
export default class ZuController {
  @operation({
    summary: "Get Zus",
  })
  @get()
  static getZus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zu",
  })
  @post("{id}")
  static createZu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
