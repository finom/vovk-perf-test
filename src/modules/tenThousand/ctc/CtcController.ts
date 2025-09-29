import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctcs")
export default class CtcController {
  @operation({
    summary: "Get Ctcs",
  })
  @get()
  static getCtcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctc",
  })
  @post("{id}")
  static createCtc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
