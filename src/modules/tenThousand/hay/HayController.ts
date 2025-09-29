import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hays")
export default class HayController {
  @operation({
    summary: "Get Hays",
  })
  @get()
  static getHays = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hay",
  })
  @post("{id}")
  static createHay = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
