import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hefs")
export default class HefController {
  @operation({
    summary: "Get Hefs",
  })
  @get()
  static getHefs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hef",
  })
  @post("{id}")
  static createHef = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
