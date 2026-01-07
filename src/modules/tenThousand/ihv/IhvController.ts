import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihv")
export default class IhvController {
  @operation({
    summary: "Get Ihv",
  })
  @get()
  static getIhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihv",
  })
  @post("{id}")
  static createIhv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
