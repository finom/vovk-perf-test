import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfd")
export default class BfdController {
  @operation({
    summary: "Get Bfd",
  })
  @get()
  static getBfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfd",
  })
  @post("{id}")
  static createBfd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
