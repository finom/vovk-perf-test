import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ij")
export default class IjController {
  @operation({
    summary: "Get Ij",
  })
  @get()
  static getIj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ij",
  })
  @post("{id}")
  static createIj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
