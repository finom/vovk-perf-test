import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gshes")
export default class GshController {
  @operation({
    summary: "Get Gshes",
  })
  @get()
  static getGshes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsh",
  })
  @post("{id}")
  static createGsh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
