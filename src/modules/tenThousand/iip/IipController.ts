import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iips")
export default class IipController {
  @operation({
    summary: "Get Iips",
  })
  @get()
  static getIips = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iip",
  })
  @post("{id}")
  static createIip = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
