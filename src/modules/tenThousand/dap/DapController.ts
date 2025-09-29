import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("daps")
export default class DapController {
  @operation({
    summary: "Get Daps",
  })
  @get()
  static getDaps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dap",
  })
  @post("{id}")
  static createDap = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
