import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvps")
export default class GvpController {
  @operation({
    summary: "Get Gvps",
  })
  @get()
  static getGvps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvp",
  })
  @post("{id}")
  static createGvp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
