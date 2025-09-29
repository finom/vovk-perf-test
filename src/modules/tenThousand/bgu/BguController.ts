import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgus")
export default class BguController {
  @operation({
    summary: "Get Bgus",
  })
  @get()
  static getBgus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgu",
  })
  @post("{id}")
  static createBgu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
