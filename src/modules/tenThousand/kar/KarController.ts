import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kars")
export default class KarController {
  @operation({
    summary: "Get Kars",
  })
  @get()
  static getKars = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kar",
  })
  @post("{id}")
  static createKar = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
