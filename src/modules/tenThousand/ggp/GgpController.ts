import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggps")
export default class GgpController {
  @operation({
    summary: "Get Ggps",
  })
  @get()
  static getGgps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggp",
  })
  @post("{id}")
  static createGgp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
