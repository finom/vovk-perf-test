import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isns")
export default class IsnController {
  @operation({
    summary: "Get Isns",
  })
  @get()
  static getIsns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isn",
  })
  @post("{id}")
  static createIsn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
