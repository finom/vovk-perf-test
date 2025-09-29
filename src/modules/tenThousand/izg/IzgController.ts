import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izgs")
export default class IzgController {
  @operation({
    summary: "Get Izgs",
  })
  @get()
  static getIzgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izg",
  })
  @post("{id}")
  static createIzg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
