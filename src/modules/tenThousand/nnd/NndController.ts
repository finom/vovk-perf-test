import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnd")
export default class NndController {
  @operation({
    summary: "Get Nnd",
  })
  @get()
  static getNnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnd",
  })
  @post("{id}")
  static createNnd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
