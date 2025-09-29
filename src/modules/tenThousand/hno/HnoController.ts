import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnos")
export default class HnoController {
  @operation({
    summary: "Get Hnos",
  })
  @get()
  static getHnos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hno",
  })
  @post("{id}")
  static createHno = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
