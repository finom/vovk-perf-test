import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksv")
export default class KsvController {
  @operation({
    summary: "Get Ksv",
  })
  @get()
  static getKsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksv",
  })
  @post("{id}")
  static createKsv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
