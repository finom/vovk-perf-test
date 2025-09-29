import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdus")
export default class HduController {
  @operation({
    summary: "Get Hdus",
  })
  @get()
  static getHdus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdu",
  })
  @post("{id}")
  static createHdu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
