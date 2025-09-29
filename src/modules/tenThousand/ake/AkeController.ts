import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akes")
export default class AkeController {
  @operation({
    summary: "Get Akes",
  })
  @get()
  static getAkes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ake",
  })
  @post("{id}")
  static createAke = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
