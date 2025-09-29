import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gngs")
export default class GngController {
  @operation({
    summary: "Get Gngs",
  })
  @get()
  static getGngs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gng",
  })
  @post("{id}")
  static createGng = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
