import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndhs")
export default class NdhController {
  @operation({
    summary: "Get Ndhs",
  })
  @get()
  static getNdhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndh",
  })
  @post("{id}")
  static createNdh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
