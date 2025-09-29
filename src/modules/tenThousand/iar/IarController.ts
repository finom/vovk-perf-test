import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iars")
export default class IarController {
  @operation({
    summary: "Get Iars",
  })
  @get()
  static getIars = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iar",
  })
  @post("{id}")
  static createIar = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
