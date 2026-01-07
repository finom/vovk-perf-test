import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqg")
export default class IqgController {
  @operation({
    summary: "Get Iqg",
  })
  @get()
  static getIqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqg",
  })
  @post("{id}")
  static createIqg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
