import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfd")
export default class DfdController {
  @operation({
    summary: "Get Dfd",
  })
  @get()
  static getDfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfd",
  })
  @post("{id}")
  static createDfd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
