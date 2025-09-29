import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpcs")
export default class LpcController {
  @operation({
    summary: "Get Lpcs",
  })
  @get()
  static getLpcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpc",
  })
  @post("{id}")
  static createLpc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
