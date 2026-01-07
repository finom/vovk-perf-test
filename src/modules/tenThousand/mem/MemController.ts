import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mem")
export default class MemController {
  @operation({
    summary: "Get Mem",
  })
  @get()
  static getMem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mem",
  })
  @post("{id}")
  static createMem = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
