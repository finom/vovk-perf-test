import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kivs")
export default class KivController {
  @operation({
    summary: "Get Kivs",
  })
  @get()
  static getKivs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kiv",
  })
  @post("{id}")
  static createKiv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
