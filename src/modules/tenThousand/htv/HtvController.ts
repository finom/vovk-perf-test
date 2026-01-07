import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htv")
export default class HtvController {
  @operation({
    summary: "Get Htv",
  })
  @get()
  static getHtv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htv",
  })
  @post("{id}")
  static createHtv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
