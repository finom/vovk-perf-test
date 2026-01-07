import { procedure, prefix, get, post, operation } from "vovk";

@prefix("len")
export default class LenController {
  @operation({
    summary: "Get Len",
  })
  @get()
  static getLen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Len",
  })
  @post("{id}")
  static createLen = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
