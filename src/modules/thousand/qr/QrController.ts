import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qrs")
export default class QrController {
  @operation({
    summary: "Get Qrs",
  })
  @get()
  static getQrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qr",
  })
  @post("{id}")
  static createQr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
