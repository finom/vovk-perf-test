import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyv")
export default class IyvController {
  @operation({
    summary: "Get Iyv",
  })
  @get()
  static getIyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyv",
  })
  @post("{id}")
  static createIyv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
