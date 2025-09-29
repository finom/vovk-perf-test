import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nous")
export default class NouController {
  @operation({
    summary: "Get Nous",
  })
  @get()
  static getNous = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nou",
  })
  @post("{id}")
  static createNou = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
