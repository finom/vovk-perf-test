import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fays")
export default class FayController {
  @operation({
    summary: "Get Fays",
  })
  @get()
  static getFays = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fay",
  })
  @post("{id}")
  static createFay = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
