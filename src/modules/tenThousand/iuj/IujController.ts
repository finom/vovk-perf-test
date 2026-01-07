import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuj")
export default class IujController {
  @operation({
    summary: "Get Iuj",
  })
  @get()
  static getIuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iuj",
  })
  @post("{id}")
  static createIuj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
