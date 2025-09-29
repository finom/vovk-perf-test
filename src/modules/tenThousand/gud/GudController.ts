import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("guds")
export default class GudController {
  @operation({
    summary: "Get Guds",
  })
  @get()
  static getGuds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gud",
  })
  @post("{id}")
  static createGud = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
