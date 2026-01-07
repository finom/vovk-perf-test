import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nef")
export default class NefController {
  @operation({
    summary: "Get Nef",
  })
  @get()
  static getNef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nef",
  })
  @post("{id}")
  static createNef = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
