import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktp")
export default class KtpController {
  @operation({
    summary: "Get Ktp",
  })
  @get()
  static getKtp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktp",
  })
  @post("{id}")
  static createKtp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
