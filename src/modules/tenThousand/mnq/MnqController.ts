import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnq")
export default class MnqController {
  @operation({
    summary: "Get Mnq",
  })
  @get()
  static getMnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnq",
  })
  @post("{id}")
  static createMnq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
