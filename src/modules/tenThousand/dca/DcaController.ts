import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcas")
export default class DcaController {
  @operation({
    summary: "Get Dcas",
  })
  @get()
  static getDcas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dca",
  })
  @post("{id}")
  static createDca = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
