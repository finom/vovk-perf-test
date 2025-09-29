import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iirs")
export default class IirController {
  @operation({
    summary: "Get Iirs",
  })
  @get()
  static getIirs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iir",
  })
  @post("{id}")
  static createIir = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
