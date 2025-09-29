import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwrs")
export default class CwrController {
  @operation({
    summary: "Get Cwrs",
  })
  @get()
  static getCwrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwr",
  })
  @post("{id}")
  static createCwr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
