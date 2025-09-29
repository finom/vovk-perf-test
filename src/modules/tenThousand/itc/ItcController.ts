import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itcs")
export default class ItcController {
  @operation({
    summary: "Get Itcs",
  })
  @get()
  static getItcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itc",
  })
  @post("{id}")
  static createItc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
