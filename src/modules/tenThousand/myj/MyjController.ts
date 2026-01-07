import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myj")
export default class MyjController {
  @operation({
    summary: "Get Myj",
  })
  @get()
  static getMyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myj",
  })
  @post("{id}")
  static createMyj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
