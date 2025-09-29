import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axms")
export default class AxmController {
  @operation({
    summary: "Get Axms",
  })
  @get()
  static getAxms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axm",
  })
  @post("{id}")
  static createAxm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
