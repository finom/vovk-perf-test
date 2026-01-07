import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihg")
export default class IhgController {
  @operation({
    summary: "Get Ihg",
  })
  @get()
  static getIhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihg",
  })
  @post("{id}")
  static createIhg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
