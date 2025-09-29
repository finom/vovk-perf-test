import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itzs")
export default class ItzController {
  @operation({
    summary: "Get Itzs",
  })
  @get()
  static getItzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itz",
  })
  @post("{id}")
  static createItz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
