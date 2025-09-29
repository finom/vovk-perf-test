import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkas")
export default class HkaController {
  @operation({
    summary: "Get Hkas",
  })
  @get()
  static getHkas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hka",
  })
  @post("{id}")
  static createHka = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
