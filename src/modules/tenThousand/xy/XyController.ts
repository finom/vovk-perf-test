import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xy")
export default class XyController {
  @operation({
    summary: "Get Xy",
  })
  @get()
  static getXy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xy",
  })
  @post("{id}")
  static createXy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
