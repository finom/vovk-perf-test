import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ist")
export default class IstController {
  @operation({
    summary: "Get Ist",
  })
  @get()
  static getIst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ist",
  })
  @post("{id}")
  static createIst = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
