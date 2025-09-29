import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azzes")
export default class AzzController {
  @operation({
    summary: "Get Azzes",
  })
  @get()
  static getAzzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azz",
  })
  @post("{id}")
  static createAzz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
