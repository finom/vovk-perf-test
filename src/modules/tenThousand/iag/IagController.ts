import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iag")
export default class IagController {
  @operation({
    summary: "Get Iag",
  })
  @get()
  static getIag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iag",
  })
  @post("{id}")
  static createIag = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
