import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcs")
export default class DcController {
  @operation({
    summary: "Get Dcs",
  })
  @get()
  static getDcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dc",
  })
  @post("{id}")
  static createDc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
