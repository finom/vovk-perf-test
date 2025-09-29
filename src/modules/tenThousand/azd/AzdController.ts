import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azds")
export default class AzdController {
  @operation({
    summary: "Get Azds",
  })
  @get()
  static getAzds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azd",
  })
  @post("{id}")
  static createAzd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
