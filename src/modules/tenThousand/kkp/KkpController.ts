import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkp")
export default class KkpController {
  @operation({
    summary: "Get Kkp",
  })
  @get()
  static getKkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkp",
  })
  @post("{id}")
  static createKkp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
