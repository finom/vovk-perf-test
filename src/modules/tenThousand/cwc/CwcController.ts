import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwcs")
export default class CwcController {
  @operation({
    summary: "Get Cwcs",
  })
  @get()
  static getCwcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwc",
  })
  @post("{id}")
  static createCwc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
