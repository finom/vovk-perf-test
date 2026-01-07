import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntp")
export default class NtpController {
  @operation({
    summary: "Get Ntp",
  })
  @get()
  static getNtp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ntp",
  })
  @post("{id}")
  static createNtp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
