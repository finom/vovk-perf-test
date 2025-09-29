import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpds")
export default class LpdController {
  @operation({
    summary: "Get Lpds",
  })
  @get()
  static getLpds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpd",
  })
  @post("{id}")
  static createLpd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
