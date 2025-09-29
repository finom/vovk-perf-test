import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eties")
export default class EtyController {
  @operation({
    summary: "Get Eties",
  })
  @get()
  static getEties = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ety",
  })
  @post("{id}")
  static createEty = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
