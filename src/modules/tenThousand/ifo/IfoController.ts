import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifos")
export default class IfoController {
  @operation({
    summary: "Get Ifos",
  })
  @get()
  static getIfos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifo",
  })
  @post("{id}")
  static createIfo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
