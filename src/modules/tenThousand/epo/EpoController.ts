import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epo")
export default class EpoController {
  @operation({
    summary: "Get Epo",
  })
  @get()
  static getEpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epo",
  })
  @post("{id}")
  static createEpo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
