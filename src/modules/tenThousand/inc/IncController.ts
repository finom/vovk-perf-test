import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("incs")
export default class IncController {
  @operation({
    summary: "Get Incs",
  })
  @get()
  static getIncs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Inc",
  })
  @post("{id}")
  static createInc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
