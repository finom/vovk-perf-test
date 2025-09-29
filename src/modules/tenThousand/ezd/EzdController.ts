import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezds")
export default class EzdController {
  @operation({
    summary: "Get Ezds",
  })
  @get()
  static getEzds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezd",
  })
  @post("{id}")
  static createEzd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
