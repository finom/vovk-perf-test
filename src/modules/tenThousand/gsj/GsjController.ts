import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsj")
export default class GsjController {
  @operation({
    summary: "Get Gsj",
  })
  @get()
  static getGsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsj",
  })
  @post("{id}")
  static createGsj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
