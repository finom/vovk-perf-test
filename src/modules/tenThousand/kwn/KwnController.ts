import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwns")
export default class KwnController {
  @operation({
    summary: "Get Kwns",
  })
  @get()
  static getKwns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwn",
  })
  @post("{id}")
  static createKwn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
