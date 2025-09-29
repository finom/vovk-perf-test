import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebts")
export default class EbtController {
  @operation({
    summary: "Get Ebts",
  })
  @get()
  static getEbts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebt",
  })
  @post("{id}")
  static createEbt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
