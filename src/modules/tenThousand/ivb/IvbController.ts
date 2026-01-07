import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivb")
export default class IvbController {
  @operation({
    summary: "Get Ivb",
  })
  @get()
  static getIvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivb",
  })
  @post("{id}")
  static createIvb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
