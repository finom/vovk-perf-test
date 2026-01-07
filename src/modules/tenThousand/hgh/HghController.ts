import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgh")
export default class HghController {
  @operation({
    summary: "Get Hgh",
  })
  @get()
  static getHgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgh",
  })
  @post("{id}")
  static createHgh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
