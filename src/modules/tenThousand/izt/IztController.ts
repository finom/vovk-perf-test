import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izts")
export default class IztController {
  @operation({
    summary: "Get Izts",
  })
  @get()
  static getIzts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izt",
  })
  @post("{id}")
  static createIzt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
