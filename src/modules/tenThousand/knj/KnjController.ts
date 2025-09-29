import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knjs")
export default class KnjController {
  @operation({
    summary: "Get Knjs",
  })
  @get()
  static getKnjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Knj",
  })
  @post("{id}")
  static createKnj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
