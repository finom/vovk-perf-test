import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyj")
export default class IyjController {
  @operation({
    summary: "Get Iyj",
  })
  @get()
  static getIyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyj",
  })
  @post("{id}")
  static createIyj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
