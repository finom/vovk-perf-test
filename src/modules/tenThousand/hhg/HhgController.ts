import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhgs")
export default class HhgController {
  @operation({
    summary: "Get Hhgs",
  })
  @get()
  static getHhgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhg",
  })
  @post("{id}")
  static createHhg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
