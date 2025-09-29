import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjcs")
export default class KjcController {
  @operation({
    summary: "Get Kjcs",
  })
  @get()
  static getKjcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjc",
  })
  @post("{id}")
  static createKjc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
