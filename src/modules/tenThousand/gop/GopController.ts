import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gops")
export default class GopController {
  @operation({
    summary: "Get Gops",
  })
  @get()
  static getGops = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gop",
  })
  @post("{id}")
  static createGop = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
