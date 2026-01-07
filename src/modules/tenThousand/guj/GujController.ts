import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guj")
export default class GujController {
  @operation({
    summary: "Get Guj",
  })
  @get()
  static getGuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Guj",
  })
  @post("{id}")
  static createGuj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
