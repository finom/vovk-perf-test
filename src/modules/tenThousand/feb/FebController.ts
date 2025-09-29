import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("febs")
export default class FebController {
  @operation({
    summary: "Get Febs",
  })
  @get()
  static getFebs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Feb",
  })
  @post("{id}")
  static createFeb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
