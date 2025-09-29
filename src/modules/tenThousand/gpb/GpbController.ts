import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpbs")
export default class GpbController {
  @operation({
    summary: "Get Gpbs",
  })
  @get()
  static getGpbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpb",
  })
  @post("{id}")
  static createGpb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
