import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmq")
export default class GmqController {
  @operation({
    summary: "Get Gmq",
  })
  @get()
  static getGmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmq",
  })
  @post("{id}")
  static createGmq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
