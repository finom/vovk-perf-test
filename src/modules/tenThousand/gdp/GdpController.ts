import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdps")
export default class GdpController {
  @operation({
    summary: "Get Gdps",
  })
  @get()
  static getGdps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdp",
  })
  @post("{id}")
  static createGdp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
