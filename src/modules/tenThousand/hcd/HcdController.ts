import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcds")
export default class HcdController {
  @operation({
    summary: "Get Hcds",
  })
  @get()
  static getHcds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcd",
  })
  @post("{id}")
  static createHcd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
