import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvjs")
export default class HvjController {
  @operation({
    summary: "Get Hvjs",
  })
  @get()
  static getHvjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvj",
  })
  @post("{id}")
  static createHvj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
