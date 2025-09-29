import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjfs")
export default class HjfController {
  @operation({
    summary: "Get Hjfs",
  })
  @get()
  static getHjfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjf",
  })
  @post("{id}")
  static createHjf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
