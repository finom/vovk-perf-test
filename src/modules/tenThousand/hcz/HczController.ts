import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hczs")
export default class HczController {
  @operation({
    summary: "Get Hczs",
  })
  @get()
  static getHczs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcz",
  })
  @post("{id}")
  static createHcz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
