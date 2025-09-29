import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htds")
export default class HtdController {
  @operation({
    summary: "Get Htds",
  })
  @get()
  static getHtds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htd",
  })
  @post("{id}")
  static createHtd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
