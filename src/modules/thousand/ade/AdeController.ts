import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ade")
export default class AdeController {
  @operation({
    summary: "Get Ade",
  })
  @get()
  static getAde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ade",
  })
  @post("{id}")
  static createAde = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
