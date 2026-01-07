import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ind")
export default class IndController {
  @operation({
    summary: "Get Ind",
  })
  @get()
  static getInd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ind",
  })
  @post("{id}")
  static createInd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
