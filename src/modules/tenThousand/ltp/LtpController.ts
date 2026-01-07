import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltp")
export default class LtpController {
  @operation({
    summary: "Get Ltp",
  })
  @get()
  static getLtp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltp",
  })
  @post("{id}")
  static createLtp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
