import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibcs")
export default class IbcController {
  @operation({
    summary: "Get Ibcs",
  })
  @get()
  static getIbcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibc",
  })
  @post("{id}")
  static createIbc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
