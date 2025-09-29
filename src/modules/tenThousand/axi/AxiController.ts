import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axis")
export default class AxiController {
  @operation({
    summary: "Get Axis",
  })
  @get()
  static getAxis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axi",
  })
  @post("{id}")
  static createAxi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
