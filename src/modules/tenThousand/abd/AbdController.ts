import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abd")
export default class AbdController {
  @operation({
    summary: "Get Abd",
  })
  @get()
  static getAbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abd",
  })
  @post("{id}")
  static createAbd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
