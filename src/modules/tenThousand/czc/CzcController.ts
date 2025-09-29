import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czcs")
export default class CzcController {
  @operation({
    summary: "Get Czcs",
  })
  @get()
  static getCzcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czc",
  })
  @post("{id}")
  static createCzc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
