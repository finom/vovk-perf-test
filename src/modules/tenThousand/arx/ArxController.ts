import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("arxes")
export default class ArxController {
  @operation({
    summary: "Get Arxes",
  })
  @get()
  static getArxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Arx",
  })
  @post("{id}")
  static createArx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
