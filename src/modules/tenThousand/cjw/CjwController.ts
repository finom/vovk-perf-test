import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjws")
export default class CjwController {
  @operation({
    summary: "Get Cjws",
  })
  @get()
  static getCjws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjw",
  })
  @post("{id}")
  static createCjw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
