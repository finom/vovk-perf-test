import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("duzs")
export default class DuzController {
  @operation({
    summary: "Get Duzs",
  })
  @get()
  static getDuzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Duz",
  })
  @post("{id}")
  static createDuz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
