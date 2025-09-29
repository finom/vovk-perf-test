import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwrs")
export default class DwrController {
  @operation({
    summary: "Get Dwrs",
  })
  @get()
  static getDwrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwr",
  })
  @post("{id}")
  static createDwr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
