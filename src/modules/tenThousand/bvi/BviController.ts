import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvis")
export default class BviController {
  @operation({
    summary: "Get Bvis",
  })
  @get()
  static getBvis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvi",
  })
  @post("{id}")
  static createBvi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
