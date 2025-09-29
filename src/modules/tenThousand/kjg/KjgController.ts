import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjgs")
export default class KjgController {
  @operation({
    summary: "Get Kjgs",
  })
  @get()
  static getKjgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjg",
  })
  @post("{id}")
  static createKjg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
