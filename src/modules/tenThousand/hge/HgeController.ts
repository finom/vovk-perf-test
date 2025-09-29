import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hges")
export default class HgeController {
  @operation({
    summary: "Get Hges",
  })
  @get()
  static getHges = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hge",
  })
  @post("{id}")
  static createHge = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
