import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izms")
export default class IzmController {
  @operation({
    summary: "Get Izms",
  })
  @get()
  static getIzms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izm",
  })
  @post("{id}")
  static createIzm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
