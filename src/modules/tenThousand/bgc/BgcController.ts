import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgcs")
export default class BgcController {
  @operation({
    summary: "Get Bgcs",
  })
  @get()
  static getBgcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgc",
  })
  @post("{id}")
  static createBgc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
