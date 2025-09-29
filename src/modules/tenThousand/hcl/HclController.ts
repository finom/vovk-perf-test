import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcls")
export default class HclController {
  @operation({
    summary: "Get Hcls",
  })
  @get()
  static getHcls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcl",
  })
  @post("{id}")
  static createHcl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
