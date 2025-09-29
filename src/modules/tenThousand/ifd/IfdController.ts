import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifds")
export default class IfdController {
  @operation({
    summary: "Get Ifds",
  })
  @get()
  static getIfds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifd",
  })
  @post("{id}")
  static createIfd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
