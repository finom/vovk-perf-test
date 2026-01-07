import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qr")
export default class QrController {
  @operation({
    summary: "Get Qr",
  })
  @get()
  static getQr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qr",
  })
  @post("{id}")
  static createQr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
