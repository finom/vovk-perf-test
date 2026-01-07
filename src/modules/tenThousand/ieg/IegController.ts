import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ieg")
export default class IegController {
  @operation({
    summary: "Get Ieg",
  })
  @get()
  static getIeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ieg",
  })
  @post("{id}")
  static createIeg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
