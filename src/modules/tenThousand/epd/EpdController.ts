import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epds")
export default class EpdController {
  @operation({
    summary: "Get Epds",
  })
  @get()
  static getEpds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epd",
  })
  @post("{id}")
  static createEpd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
