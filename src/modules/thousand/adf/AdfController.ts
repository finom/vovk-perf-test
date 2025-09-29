import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adfs")
export default class AdfController {
  @operation({
    summary: "Get Adfs",
  })
  @get()
  static getAdfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adf",
  })
  @post("{id}")
  static createAdf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
