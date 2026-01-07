import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqv")
export default class IqvController {
  @operation({
    summary: "Get Iqv",
  })
  @get()
  static getIqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqv",
  })
  @post("{id}")
  static createIqv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
