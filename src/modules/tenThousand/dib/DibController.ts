import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dibs")
export default class DibController {
  @operation({
    summary: "Get Dibs",
  })
  @get()
  static getDibs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dib",
  })
  @post("{id}")
  static createDib = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
