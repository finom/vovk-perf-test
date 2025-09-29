import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbns")
export default class GbnController {
  @operation({
    summary: "Get Gbns",
  })
  @get()
  static getGbns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbn",
  })
  @post("{id}")
  static createGbn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
