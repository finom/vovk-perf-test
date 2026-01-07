import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ack")
export default class AckController {
  @operation({
    summary: "Get Ack",
  })
  @get()
  static getAck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ack",
  })
  @post("{id}")
  static createAck = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
