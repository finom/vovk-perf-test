import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dccs")
export default class DccController {
  @operation({
    summary: "Get Dccs",
  })
  @get()
  static getDccs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcc",
  })
  @post("{id}")
  static createDcc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
