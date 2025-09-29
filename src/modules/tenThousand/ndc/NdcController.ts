import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndcs")
export default class NdcController {
  @operation({
    summary: "Get Ndcs",
  })
  @get()
  static getNdcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndc",
  })
  @post("{id}")
  static createNdc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
