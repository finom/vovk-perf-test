import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkes")
export default class FkeController {
  @operation({
    summary: "Get Fkes",
  })
  @get()
  static getFkes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fke",
  })
  @post("{id}")
  static createFke = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
