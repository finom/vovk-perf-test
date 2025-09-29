import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhls")
export default class DhlController {
  @operation({
    summary: "Get Dhls",
  })
  @get()
  static getDhls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhl",
  })
  @post("{id}")
  static createDhl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
