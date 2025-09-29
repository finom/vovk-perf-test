import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gars")
export default class GarController {
  @operation({
    summary: "Get Gars",
  })
  @get()
  static getGars = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gar",
  })
  @post("{id}")
  static createGar = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
