import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izds")
export default class IzdController {
  @operation({
    summary: "Get Izds",
  })
  @get()
  static getIzds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izd",
  })
  @post("{id}")
  static createIzd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
