import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iuds")
export default class IudController {
  @operation({
    summary: "Get Iuds",
  })
  @get()
  static getIuds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iud",
  })
  @post("{id}")
  static createIud = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
