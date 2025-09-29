import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivps")
export default class IvpController {
  @operation({
    summary: "Get Ivps",
  })
  @get()
  static getIvps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivp",
  })
  @post("{id}")
  static createIvp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
