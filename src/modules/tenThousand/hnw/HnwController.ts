import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnws")
export default class HnwController {
  @operation({
    summary: "Get Hnws",
  })
  @get()
  static getHnws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hnw",
  })
  @post("{id}")
  static createHnw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
