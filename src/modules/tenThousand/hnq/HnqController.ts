import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnq")
export default class HnqController {
  @operation({
    summary: "Get Hnq",
  })
  @get()
  static getHnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnq",
  })
  @post("{id}")
  static createHnq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
