import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcus")
export default class DcuController {
  @operation({
    summary: "Get Dcus",
  })
  @get()
  static getDcus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcu",
  })
  @post("{id}")
  static createDcu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
