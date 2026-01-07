import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hus")
export default class HusController {
  @operation({
    summary: "Get Hus",
  })
  @get()
  static getHus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hus",
  })
  @post("{id}")
  static createHus = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
