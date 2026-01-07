import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcc")
export default class BccController {
  @operation({
    summary: "Get Bcc",
  })
  @get()
  static getBcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcc",
  })
  @post("{id}")
  static createBcc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
