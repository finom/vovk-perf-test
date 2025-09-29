import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggs")
export default class GgsController {
  @operation({
    summary: "Get Ggs",
  })
  @get()
  static getGgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggs",
  })
  @post("{id}")
  static createGgs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
