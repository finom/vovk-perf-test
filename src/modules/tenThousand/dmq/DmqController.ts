import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmq")
export default class DmqController {
  @operation({
    summary: "Get Dmq",
  })
  @get()
  static getDmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmq",
  })
  @post("{id}")
  static createDmq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
