import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvhs")
export default class DvhController {
  @operation({
    summary: "Get Dvhs",
  })
  @get()
  static getDvhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvh",
  })
  @post("{id}")
  static createDvh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
