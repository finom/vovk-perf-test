import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivh")
export default class IvhController {
  @operation({
    summary: "Get Ivh",
  })
  @get()
  static getIvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivh",
  })
  @post("{id}")
  static createIvh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
