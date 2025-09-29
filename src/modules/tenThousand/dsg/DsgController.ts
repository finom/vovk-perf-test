import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsgs")
export default class DsgController {
  @operation({
    summary: "Get Dsgs",
  })
  @get()
  static getDsgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsg",
  })
  @post("{id}")
  static createDsg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
