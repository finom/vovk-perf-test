import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axm")
export default class AxmController {
  @operation({
    summary: "Get Axm",
  })
  @get()
  static getAxm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axm",
  })
  @post("{id}")
  static createAxm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
