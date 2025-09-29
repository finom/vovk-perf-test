import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igds")
export default class IgdController {
  @operation({
    summary: "Get Igds",
  })
  @get()
  static getIgds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igd",
  })
  @post("{id}")
  static createIgd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
