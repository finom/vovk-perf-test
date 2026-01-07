import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ism")
export default class IsmController {
  @operation({
    summary: "Get Ism",
  })
  @get()
  static getIsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ism",
  })
  @post("{id}")
  static createIsm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
