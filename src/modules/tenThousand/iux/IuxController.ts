import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iux")
export default class IuxController {
  @operation({
    summary: "Get Iux",
  })
  @get()
  static getIux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iux",
  })
  @post("{id}")
  static createIux = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
