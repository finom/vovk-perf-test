import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrus")
export default class HruController {
  @operation({
    summary: "Get Hrus",
  })
  @get()
  static getHrus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hru",
  })
  @post("{id}")
  static createHru = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
