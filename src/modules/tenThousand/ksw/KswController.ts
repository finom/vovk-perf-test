import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksw")
export default class KswController {
  @operation({
    summary: "Get Ksw",
  })
  @get()
  static getKsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksw",
  })
  @post("{id}")
  static createKsw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
