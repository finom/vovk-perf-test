import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpbs")
export default class JpbController {
  @operation({
    summary: "Get Jpbs",
  })
  @get()
  static getJpbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpb",
  })
  @post("{id}")
  static createJpb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
