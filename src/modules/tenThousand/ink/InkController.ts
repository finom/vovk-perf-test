import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inks")
export default class InkController {
  @operation({
    summary: "Get Inks",
  })
  @get()
  static getInks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ink",
  })
  @post("{id}")
  static createInk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
