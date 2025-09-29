import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axes")
export default class AxController {
  @operation({
    summary: "Get Axes",
  })
  @get()
  static getAxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ax",
  })
  @post("{id}")
  static createAx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
