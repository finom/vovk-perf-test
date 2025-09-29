import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwls")
export default class CwlController {
  @operation({
    summary: "Get Cwls",
  })
  @get()
  static getCwls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwl",
  })
  @post("{id}")
  static createCwl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
