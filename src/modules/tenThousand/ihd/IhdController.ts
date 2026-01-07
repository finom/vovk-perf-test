import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihd")
export default class IhdController {
  @operation({
    summary: "Get Ihd",
  })
  @get()
  static getIhd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihd",
  })
  @post("{id}")
  static createIhd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
