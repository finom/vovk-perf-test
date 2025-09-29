import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hags")
export default class HagController {
  @operation({
    summary: "Get Hags",
  })
  @get()
  static getHags = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hag",
  })
  @post("{id}")
  static createHag = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
