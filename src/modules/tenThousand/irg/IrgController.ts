import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irgs")
export default class IrgController {
  @operation({
    summary: "Get Irgs",
  })
  @get()
  static getIrgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irg",
  })
  @post("{id}")
  static createIrg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
