import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hccs")
export default class HccController {
  @operation({
    summary: "Get Hccs",
  })
  @get()
  static getHccs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcc",
  })
  @post("{id}")
  static createHcc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
