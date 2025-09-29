import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iys")
export default class IyController {
  @operation({
    summary: "Get Iys",
  })
  @get()
  static getIys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iy",
  })
  @post("{id}")
  static createIy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
