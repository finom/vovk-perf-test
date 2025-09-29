import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwrs")
export default class FwrController {
  @operation({
    summary: "Get Fwrs",
  })
  @get()
  static getFwrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwr",
  })
  @post("{id}")
  static createFwr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
