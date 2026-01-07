import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btp")
export default class BtpController {
  @operation({
    summary: "Get Btp",
  })
  @get()
  static getBtp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btp",
  })
  @post("{id}")
  static createBtp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
