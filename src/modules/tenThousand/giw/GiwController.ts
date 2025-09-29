import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("giws")
export default class GiwController {
  @operation({
    summary: "Get Giws",
  })
  @get()
  static getGiws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Giw",
  })
  @post("{id}")
  static createGiw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
