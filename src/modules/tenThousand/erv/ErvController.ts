import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erv")
export default class ErvController {
  @operation({
    summary: "Get Erv",
  })
  @get()
  static getErv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erv",
  })
  @post("{id}")
  static createErv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
