import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nex")
export default class NexController {
  @operation({
    summary: "Get Nex",
  })
  @get()
  static getNex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nex",
  })
  @post("{id}")
  static createNex = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
