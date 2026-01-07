import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xn")
export default class XnController {
  @operation({
    summary: "Get Xn",
  })
  @get()
  static getXn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xn",
  })
  @post("{id}")
  static createXn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
