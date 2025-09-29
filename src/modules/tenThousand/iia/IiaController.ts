import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iias")
export default class IiaController {
  @operation({
    summary: "Get Iias",
  })
  @get()
  static getIias = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iia",
  })
  @post("{id}")
  static createIia = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
