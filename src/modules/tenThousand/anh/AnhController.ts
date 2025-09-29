import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anhs")
export default class AnhController {
  @operation({
    summary: "Get Anhs",
  })
  @get()
  static getAnhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Anh",
  })
  @post("{id}")
  static createAnh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
