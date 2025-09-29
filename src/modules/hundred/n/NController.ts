import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ns")
export default class NController {
  @operation({
    summary: "Get NS",
  })
  @get()
  static getNS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create N",
  })
  @post("{id}")
  static createN = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
