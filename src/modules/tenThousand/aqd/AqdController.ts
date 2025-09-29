import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqds")
export default class AqdController {
  @operation({
    summary: "Get Aqds",
  })
  @get()
  static getAqds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqd",
  })
  @post("{id}")
  static createAqd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
