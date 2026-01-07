import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ici")
export default class IciController {
  @operation({
    summary: "Get Ici",
  })
  @get()
  static getIci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ici",
  })
  @post("{id}")
  static createIci = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
