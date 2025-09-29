import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ighs")
export default class IghController {
  @operation({
    summary: "Get Ighs",
  })
  @get()
  static getIghs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igh",
  })
  @post("{id}")
  static createIgh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
