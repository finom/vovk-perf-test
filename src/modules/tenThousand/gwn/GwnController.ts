import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwn")
export default class GwnController {
  @operation({
    summary: "Get Gwn",
  })
  @get()
  static getGwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwn",
  })
  @post("{id}")
  static createGwn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
