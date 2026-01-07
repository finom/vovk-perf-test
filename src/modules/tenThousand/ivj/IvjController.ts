import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivj")
export default class IvjController {
  @operation({
    summary: "Get Ivj",
  })
  @get()
  static getIvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivj",
  })
  @post("{id}")
  static createIvj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
