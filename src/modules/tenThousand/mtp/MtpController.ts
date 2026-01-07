import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtp")
export default class MtpController {
  @operation({
    summary: "Get Mtp",
  })
  @get()
  static getMtp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtp",
  })
  @post("{id}")
  static createMtp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
