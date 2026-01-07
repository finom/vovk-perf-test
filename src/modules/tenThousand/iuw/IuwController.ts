import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuw")
export default class IuwController {
  @operation({
    summary: "Get Iuw",
  })
  @get()
  static getIuw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iuw",
  })
  @post("{id}")
  static createIuw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
