import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htqs")
export default class HtqController {
  @operation({
    summary: "Get Htqs",
  })
  @get()
  static getHtqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htq",
  })
  @post("{id}")
  static createHtq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
