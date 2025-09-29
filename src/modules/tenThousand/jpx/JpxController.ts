import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpxes")
export default class JpxController {
  @operation({
    summary: "Get Jpxes",
  })
  @get()
  static getJpxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpx",
  })
  @post("{id}")
  static createJpx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
