import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezgs")
export default class EzgController {
  @operation({
    summary: "Get Ezgs",
  })
  @get()
  static getEzgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezg",
  })
  @post("{id}")
  static createEzg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
