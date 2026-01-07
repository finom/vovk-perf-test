import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbq")
export default class MbqController {
  @operation({
    summary: "Get Mbq",
  })
  @get()
  static getMbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbq",
  })
  @post("{id}")
  static createMbq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
