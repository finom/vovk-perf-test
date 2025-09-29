import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hems")
export default class HemController {
  @operation({
    summary: "Get Hems",
  })
  @get()
  static getHems = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hem",
  })
  @post("{id}")
  static createHem = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
