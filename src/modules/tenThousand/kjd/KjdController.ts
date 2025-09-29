import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjds")
export default class KjdController {
  @operation({
    summary: "Get Kjds",
  })
  @get()
  static getKjds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjd",
  })
  @post("{id}")
  static createKjd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
