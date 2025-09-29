import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfcs")
export default class DfcController {
  @operation({
    summary: "Get Dfcs",
  })
  @get()
  static getDfcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfc",
  })
  @post("{id}")
  static createDfc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
