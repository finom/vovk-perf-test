import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmq")
export default class HmqController {
  @operation({
    summary: "Get Hmq",
  })
  @get()
  static getHmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmq",
  })
  @post("{id}")
  static createHmq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
