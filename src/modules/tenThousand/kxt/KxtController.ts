import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxts")
export default class KxtController {
  @operation({
    summary: "Get Kxts",
  })
  @get()
  static getKxts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxt",
  })
  @post("{id}")
  static createKxt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
