import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwcs")
export default class LwcController {
  @operation({
    summary: "Get Lwcs",
  })
  @get()
  static getLwcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwc",
  })
  @post("{id}")
  static createLwc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
