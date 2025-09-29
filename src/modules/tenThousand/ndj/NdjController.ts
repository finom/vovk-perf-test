import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndjs")
export default class NdjController {
  @operation({
    summary: "Get Ndjs",
  })
  @get()
  static getNdjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndj",
  })
  @post("{id}")
  static createNdj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
