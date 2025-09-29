import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cshes")
export default class CshController {
  @operation({
    summary: "Get Cshes",
  })
  @get()
  static getCshes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csh",
  })
  @post("{id}")
  static createCsh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
