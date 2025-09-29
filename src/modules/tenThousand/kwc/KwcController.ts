import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwcs")
export default class KwcController {
  @operation({
    summary: "Get Kwcs",
  })
  @get()
  static getKwcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwc",
  })
  @post("{id}")
  static createKwc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
