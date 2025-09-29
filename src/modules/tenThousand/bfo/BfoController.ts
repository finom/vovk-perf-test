import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfos")
export default class BfoController {
  @operation({
    summary: "Get Bfos",
  })
  @get()
  static getBfos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfo",
  })
  @post("{id}")
  static createBfo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
