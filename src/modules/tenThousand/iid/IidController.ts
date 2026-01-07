import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iid")
export default class IidController {
  @operation({
    summary: "Get Iid",
  })
  @get()
  static getIid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iid",
  })
  @post("{id}")
  static createIid = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
