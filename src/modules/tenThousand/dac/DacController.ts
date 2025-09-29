import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dacs")
export default class DacController {
  @operation({
    summary: "Get Dacs",
  })
  @get()
  static getDacs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dac",
  })
  @post("{id}")
  static createDac = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
