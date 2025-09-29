import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijes")
export default class IjeController {
  @operation({
    summary: "Get Ijes",
  })
  @get()
  static getIjes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ije",
  })
  @post("{id}")
  static createIje = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
