import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihf")
export default class IhfController {
  @operation({
    summary: "Get Ihf",
  })
  @get()
  static getIhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihf",
  })
  @post("{id}")
  static createIhf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
