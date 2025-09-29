import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("doqs")
export default class DoqController {
  @operation({
    summary: "Get Doqs",
  })
  @get()
  static getDoqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Doq",
  })
  @post("{id}")
  static createDoq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
