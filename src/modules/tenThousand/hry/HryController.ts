import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hries")
export default class HryController {
  @operation({
    summary: "Get Hries",
  })
  @get()
  static getHries = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hry",
  })
  @post("{id}")
  static createHry = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
