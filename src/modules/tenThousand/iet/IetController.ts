import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iets")
export default class IetController {
  @operation({
    summary: "Get Iets",
  })
  @get()
  static getIets = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iet",
  })
  @post("{id}")
  static createIet = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
