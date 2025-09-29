import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyus")
export default class HyuController {
  @operation({
    summary: "Get Hyus",
  })
  @get()
  static getHyus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyu",
  })
  @post("{id}")
  static createHyu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
