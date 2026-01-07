import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuj")
export default class KujController {
  @operation({
    summary: "Get Kuj",
  })
  @get()
  static getKuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuj",
  })
  @post("{id}")
  static createKuj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
