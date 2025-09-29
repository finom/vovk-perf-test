import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aties")
export default class AtyController {
  @operation({
    summary: "Get Aties",
  })
  @get()
  static getAties = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aty",
  })
  @post("{id}")
  static createAty = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
