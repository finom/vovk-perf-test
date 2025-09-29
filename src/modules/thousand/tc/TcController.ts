import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tcs")
export default class TcController {
  @operation({
    summary: "Get Tcs",
  })
  @get()
  static getTcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tc",
  })
  @post("{id}")
  static createTc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
