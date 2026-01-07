import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpt")
export default class HptController {
  @operation({
    summary: "Get Hpt",
  })
  @get()
  static getHpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpt",
  })
  @post("{id}")
  static createHpt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
