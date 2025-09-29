import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjhs")
export default class GjhController {
  @operation({
    summary: "Get Gjhs",
  })
  @get()
  static getGjhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjh",
  })
  @post("{id}")
  static createGjh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
