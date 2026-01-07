import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itn")
export default class ItnController {
  @operation({
    summary: "Get Itn",
  })
  @get()
  static getItn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itn",
  })
  @post("{id}")
  static createItn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
