import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbcs")
export default class GbcController {
  @operation({
    summary: "Get Gbcs",
  })
  @get()
  static getGbcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbc",
  })
  @post("{id}")
  static createGbc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
