import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgls")
export default class HglController {
  @operation({
    summary: "Get Hgls",
  })
  @get()
  static getHgls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgl",
  })
  @post("{id}")
  static createHgl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
