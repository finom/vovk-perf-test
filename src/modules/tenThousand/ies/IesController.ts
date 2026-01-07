import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ies")
export default class IesController {
  @operation({
    summary: "Get Ies",
  })
  @get()
  static getIes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ies",
  })
  @post("{id}")
  static createIes = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
