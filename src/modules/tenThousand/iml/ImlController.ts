import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iml")
export default class ImlController {
  @operation({
    summary: "Get Iml",
  })
  @get()
  static getIml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iml",
  })
  @post("{id}")
  static createIml = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
