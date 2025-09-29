import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adus")
export default class AduController {
  @operation({
    summary: "Get Adus",
  })
  @get()
  static getAdus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adu",
  })
  @post("{id}")
  static createAdu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
