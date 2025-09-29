import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezcs")
export default class EzcController {
  @operation({
    summary: "Get Ezcs",
  })
  @get()
  static getEzcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezc",
  })
  @post("{id}")
  static createEzc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
