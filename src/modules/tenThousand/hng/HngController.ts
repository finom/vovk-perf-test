import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hngs")
export default class HngController {
  @operation({
    summary: "Get Hngs",
  })
  @get()
  static getHngs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hng",
  })
  @post("{id}")
  static createHng = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
