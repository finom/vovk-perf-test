import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isf")
export default class IsfController {
  @operation({
    summary: "Get Isf",
  })
  @get()
  static getIsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isf",
  })
  @post("{id}")
  static createIsf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
