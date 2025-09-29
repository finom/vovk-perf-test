import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikes")
export default class IkeController {
  @operation({
    summary: "Get Ikes",
  })
  @get()
  static getIkes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ike",
  })
  @post("{id}")
  static createIke = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
