import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elcs")
export default class ElcController {
  @operation({
    summary: "Get Elcs",
  })
  @get()
  static getElcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elc",
  })
  @post("{id}")
  static createElc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
