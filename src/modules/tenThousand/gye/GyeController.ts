import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyes")
export default class GyeController {
  @operation({
    summary: "Get Gyes",
  })
  @get()
  static getGyes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gye",
  })
  @post("{id}")
  static createGye = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
