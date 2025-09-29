import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjus")
export default class GjuController {
  @operation({
    summary: "Get Gjus",
  })
  @get()
  static getGjus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gju",
  })
  @post("{id}")
  static createGju = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
