import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enbs")
export default class EnbController {
  @operation({
    summary: "Get Enbs",
  })
  @get()
  static getEnbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Enb",
  })
  @post("{id}")
  static createEnb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
