import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvks")
export default class HvkController {
  @operation({
    summary: "Get Hvks",
  })
  @get()
  static getHvks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvk",
  })
  @post("{id}")
  static createHvk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
