import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibg")
export default class IbgController {
  @operation({
    summary: "Get Ibg",
  })
  @get()
  static getIbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibg",
  })
  @post("{id}")
  static createIbg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
