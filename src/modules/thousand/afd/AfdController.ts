import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afds")
export default class AfdController {
  @operation({
    summary: "Get Afds",
  })
  @get()
  static getAfds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afd",
  })
  @post("{id}")
  static createAfd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
