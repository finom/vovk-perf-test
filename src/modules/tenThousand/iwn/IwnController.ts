import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwns")
export default class IwnController {
  @operation({
    summary: "Get Iwns",
  })
  @get()
  static getIwns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwn",
  })
  @post("{id}")
  static createIwn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
