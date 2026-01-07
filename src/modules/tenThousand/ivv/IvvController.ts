import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivv")
export default class IvvController {
  @operation({
    summary: "Get Ivv",
  })
  @get()
  static getIvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivv",
  })
  @post("{id}")
  static createIvv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
