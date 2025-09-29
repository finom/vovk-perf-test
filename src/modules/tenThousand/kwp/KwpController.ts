import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwps")
export default class KwpController {
  @operation({
    summary: "Get Kwps",
  })
  @get()
  static getKwps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwp",
  })
  @post("{id}")
  static createKwp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
