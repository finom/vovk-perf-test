import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfd")
export default class NfdController {
  @operation({
    summary: "Get Nfd",
  })
  @get()
  static getNfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfd",
  })
  @post("{id}")
  static createNfd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
