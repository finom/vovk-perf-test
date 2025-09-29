import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igfs")
export default class IgfController {
  @operation({
    summary: "Get Igfs",
  })
  @get()
  static getIgfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igf",
  })
  @post("{id}")
  static createIgf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
