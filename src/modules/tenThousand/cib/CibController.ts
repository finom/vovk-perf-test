import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cib")
export default class CibController {
  @operation({
    summary: "Get Cib",
  })
  @get()
  static getCib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cib",
  })
  @post("{id}")
  static createCib = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
