import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqy")
export default class IqyController {
  @operation({
    summary: "Get Iqy",
  })
  @get()
  static getIqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqy",
  })
  @post("{id}")
  static createIqy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
