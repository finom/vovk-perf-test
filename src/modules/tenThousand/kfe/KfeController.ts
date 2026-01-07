import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfe")
export default class KfeController {
  @operation({
    summary: "Get Kfe",
  })
  @get()
  static getKfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfe",
  })
  @post("{id}")
  static createKfe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
