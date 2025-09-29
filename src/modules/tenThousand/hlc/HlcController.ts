import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlcs")
export default class HlcController {
  @operation({
    summary: "Get Hlcs",
  })
  @get()
  static getHlcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlc",
  })
  @post("{id}")
  static createHlc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
