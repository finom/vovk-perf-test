import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isz")
export default class IszController {
  @operation({
    summary: "Get Isz",
  })
  @get()
  static getIsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isz",
  })
  @post("{id}")
  static createIsz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
