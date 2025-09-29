import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cts")
export default class CtController {
  @operation({
    summary: "Get Cts",
  })
  @get()
  static getCts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ct",
  })
  @post("{id}")
  static createCt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
