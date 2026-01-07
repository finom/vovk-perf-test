import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbs")
export default class KbsController {
  @operation({
    summary: "Get Kbs",
  })
  @get()
  static getKbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbs",
  })
  @post("{id}")
  static createKbs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
