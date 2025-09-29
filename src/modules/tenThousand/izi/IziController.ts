import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izis")
export default class IziController {
  @operation({
    summary: "Get Izis",
  })
  @get()
  static getIzis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izi",
  })
  @post("{id}")
  static createIzi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
