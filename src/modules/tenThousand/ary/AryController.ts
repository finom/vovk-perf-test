import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aries")
export default class AryController {
  @operation({
    summary: "Get Aries",
  })
  @get()
  static getAries = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ary",
  })
  @post("{id}")
  static createAry = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
