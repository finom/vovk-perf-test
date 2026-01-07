import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipr")
export default class IprController {
  @operation({
    summary: "Get Ipr",
  })
  @get()
  static getIpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipr",
  })
  @post("{id}")
  static createIpr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
