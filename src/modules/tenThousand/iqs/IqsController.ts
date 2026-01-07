import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqs")
export default class IqsController {
  @operation({
    summary: "Get Iqs",
  })
  @get()
  static getIqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqs",
  })
  @post("{id}")
  static createIqs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
