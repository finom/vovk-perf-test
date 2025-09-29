import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irhs")
export default class IrhController {
  @operation({
    summary: "Get Irhs",
  })
  @get()
  static getIrhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irh",
  })
  @post("{id}")
  static createIrh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
