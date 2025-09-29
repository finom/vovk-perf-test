import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gius")
export default class GiuController {
  @operation({
    summary: "Get Gius",
  })
  @get()
  static getGius = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Giu",
  })
  @post("{id}")
  static createGiu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
