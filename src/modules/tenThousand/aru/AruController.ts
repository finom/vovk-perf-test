import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("arus")
export default class AruController {
  @operation({
    summary: "Get Arus",
  })
  @get()
  static getArus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aru",
  })
  @post("{id}")
  static createAru = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
