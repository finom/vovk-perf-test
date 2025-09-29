import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kevs")
export default class KevController {
  @operation({
    summary: "Get Kevs",
  })
  @get()
  static getKevs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kev",
  })
  @post("{id}")
  static createKev = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
