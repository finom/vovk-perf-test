import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcrs")
export default class HcrController {
  @operation({
    summary: "Get Hcrs",
  })
  @get()
  static getHcrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcr",
  })
  @post("{id}")
  static createHcr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
