import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htts")
export default class HttController {
  @operation({
    summary: "Get Htts",
  })
  @get()
  static getHtts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htt",
  })
  @post("{id}")
  static createHtt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
