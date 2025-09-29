import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfts")
export default class CftController {
  @operation({
    summary: "Get Cfts",
  })
  @get()
  static getCfts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cft",
  })
  @post("{id}")
  static createCft = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
