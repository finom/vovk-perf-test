import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtp")
export default class DtpController {
  @operation({
    summary: "Get Dtp",
  })
  @get()
  static getDtp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtp",
  })
  @post("{id}")
  static createDtp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
