import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdcs")
export default class GdcController {
  @operation({
    summary: "Get Gdcs",
  })
  @get()
  static getGdcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdc",
  })
  @post("{id}")
  static createGdc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
