import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibzs")
export default class IbzController {
  @operation({
    summary: "Get Ibzs",
  })
  @get()
  static getIbzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibz",
  })
  @post("{id}")
  static createIbz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
