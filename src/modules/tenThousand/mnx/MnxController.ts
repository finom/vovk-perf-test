import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnx")
export default class MnxController {
  @operation({
    summary: "Get Mnx",
  })
  @get()
  static getMnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnx",
  })
  @post("{id}")
  static createMnx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
