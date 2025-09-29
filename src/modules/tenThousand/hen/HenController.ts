import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hens")
export default class HenController {
  @operation({
    summary: "Get Hens",
  })
  @get()
  static getHens = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hen",
  })
  @post("{id}")
  static createHen = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
