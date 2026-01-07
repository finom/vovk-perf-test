import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikp")
export default class IkpController {
  @operation({
    summary: "Get Ikp",
  })
  @get()
  static getIkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikp",
  })
  @post("{id}")
  static createIkp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
