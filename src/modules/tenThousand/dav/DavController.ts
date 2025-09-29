import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("davs")
export default class DavController {
  @operation({
    summary: "Get Davs",
  })
  @get()
  static getDavs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dav",
  })
  @post("{id}")
  static createDav = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
