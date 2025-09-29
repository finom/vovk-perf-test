import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vus")
export default class VuController {
  @operation({
    summary: "Get Vus",
  })
  @get()
  static getVus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vu",
  })
  @post("{id}")
  static createVu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
