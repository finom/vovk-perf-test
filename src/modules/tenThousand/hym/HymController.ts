import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hym")
export default class HymController {
  @operation({
    summary: "Get Hym",
  })
  @get()
  static getHym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hym",
  })
  @post("{id}")
  static createHym = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
