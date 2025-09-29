import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ogs")
export default class OgController {
  @operation({
    summary: "Get Ogs",
  })
  @get()
  static getOgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Og",
  })
  @post("{id}")
  static createOg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
