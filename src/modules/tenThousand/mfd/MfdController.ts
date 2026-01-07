import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfd")
export default class MfdController {
  @operation({
    summary: "Get Mfd",
  })
  @get()
  static getMfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfd",
  })
  @post("{id}")
  static createMfd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
