import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjos")
export default class GjoController {
  @operation({
    summary: "Get Gjos",
  })
  @get()
  static getGjos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjo",
  })
  @post("{id}")
  static createGjo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
