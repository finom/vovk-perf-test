import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edks")
export default class EdkController {
  @operation({
    summary: "Get Edks",
  })
  @get()
  static getEdks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edk",
  })
  @post("{id}")
  static createEdk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
