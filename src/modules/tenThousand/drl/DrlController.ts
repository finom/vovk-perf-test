import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drl")
export default class DrlController {
  @operation({
    summary: "Get Drl",
  })
  @get()
  static getDrl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drl",
  })
  @post("{id}")
  static createDrl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
