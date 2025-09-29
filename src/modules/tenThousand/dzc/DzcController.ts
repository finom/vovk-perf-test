import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzcs")
export default class DzcController {
  @operation({
    summary: "Get Dzcs",
  })
  @get()
  static getDzcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzc",
  })
  @post("{id}")
  static createDzc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
