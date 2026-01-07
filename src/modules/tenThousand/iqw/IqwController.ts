import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqw")
export default class IqwController {
  @operation({
    summary: "Get Iqw",
  })
  @get()
  static getIqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqw",
  })
  @post("{id}")
  static createIqw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
