import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atds")
export default class AtdController {
  @operation({
    summary: "Get Atds",
  })
  @get()
  static getAtds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Atd",
  })
  @post("{id}")
  static createAtd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
