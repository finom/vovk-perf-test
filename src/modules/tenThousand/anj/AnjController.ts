import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anj")
export default class AnjController {
  @operation({
    summary: "Get Anj",
  })
  @get()
  static getAnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anj",
  })
  @post("{id}")
  static createAnj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
