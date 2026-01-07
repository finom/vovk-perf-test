import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eag")
export default class EagController {
  @operation({
    summary: "Get Eag",
  })
  @get()
  static getEag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eag",
  })
  @post("{id}")
  static createEag = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
