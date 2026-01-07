import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jms")
export default class JmsController {
  @operation({
    summary: "Get Jms",
  })
  @get()
  static getJms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jms",
  })
  @post("{id}")
  static createJms = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
