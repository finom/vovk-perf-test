import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvgs")
export default class HvgController {
  @operation({
    summary: "Get Hvgs",
  })
  @get()
  static getHvgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvg",
  })
  @post("{id}")
  static createHvg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
