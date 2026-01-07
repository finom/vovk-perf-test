import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nic")
export default class NicController {
  @operation({
    summary: "Get Nic",
  })
  @get()
  static getNic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nic",
  })
  @post("{id}")
  static createNic = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
