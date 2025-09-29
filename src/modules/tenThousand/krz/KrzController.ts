import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krzs")
export default class KrzController {
  @operation({
    summary: "Get Krzs",
  })
  @get()
  static getKrzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krz",
  })
  @post("{id}")
  static createKrz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
