import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyp")
export default class IypController {
  @operation({
    summary: "Get Iyp",
  })
  @get()
  static getIyp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyp",
  })
  @post("{id}")
  static createIyp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
