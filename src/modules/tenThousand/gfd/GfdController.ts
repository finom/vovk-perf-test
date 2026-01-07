import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfd")
export default class GfdController {
  @operation({
    summary: "Get Gfd",
  })
  @get()
  static getGfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfd",
  })
  @post("{id}")
  static createGfd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
