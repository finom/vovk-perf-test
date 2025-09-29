import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvcs")
export default class HvcController {
  @operation({
    summary: "Get Hvcs",
  })
  @get()
  static getHvcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvc",
  })
  @post("{id}")
  static createHvc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
