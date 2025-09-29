import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cngs")
export default class CngController {
  @operation({
    summary: "Get Cngs",
  })
  @get()
  static getCngs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cng",
  })
  @post("{id}")
  static createCng = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
