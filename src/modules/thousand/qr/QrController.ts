import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qrs")
export default class QrController {
  @operation({
    summary: "Get Qrs",
  })
  @get()
  static getQrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qr",
  })
  @post("{id}")
  static createQr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
