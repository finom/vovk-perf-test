import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfo")
export default class CfoController {
  @operation({
    summary: "Get Cfo",
  })
  @get()
  static getCfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfo",
  })
  @post("{id}")
  static createCfo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
