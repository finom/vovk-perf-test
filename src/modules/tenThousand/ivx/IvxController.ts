import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivx")
export default class IvxController {
  @operation({
    summary: "Get Ivx",
  })
  @get()
  static getIvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivx",
  })
  @post("{id}")
  static createIvx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
