import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifo")
export default class IfoController {
  @operation({
    summary: "Get Ifo",
  })
  @get()
  static getIfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifo",
  })
  @post("{id}")
  static createIfo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
