import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpis")
export default class BpiController {
  @operation({
    summary: "Get Bpis",
  })
  @get()
  static getBpis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpi",
  })
  @post("{id}")
  static createBpi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
