import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ie")
export default class IeController {
  @operation({
    summary: "Get Ie",
  })
  @get()
  static getIe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ie",
  })
  @post("{id}")
  static createIe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
