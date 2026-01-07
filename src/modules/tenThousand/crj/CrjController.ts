import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crj")
export default class CrjController {
  @operation({
    summary: "Get Crj",
  })
  @get()
  static getCrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crj",
  })
  @post("{id}")
  static createCrj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
