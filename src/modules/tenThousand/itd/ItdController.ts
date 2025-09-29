import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itds")
export default class ItdController {
  @operation({
    summary: "Get Itds",
  })
  @get()
  static getItds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itd",
  })
  @post("{id}")
  static createItd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
