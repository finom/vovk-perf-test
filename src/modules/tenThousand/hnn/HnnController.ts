import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnns")
export default class HnnController {
  @operation({
    summary: "Get Hnns",
  })
  @get()
  static getHnns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hnn",
  })
  @post("{id}")
  static createHnn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
