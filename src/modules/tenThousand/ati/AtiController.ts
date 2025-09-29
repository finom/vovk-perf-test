import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atis")
export default class AtiController {
  @operation({
    summary: "Get Atis",
  })
  @get()
  static getAtis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ati",
  })
  @post("{id}")
  static createAti = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
