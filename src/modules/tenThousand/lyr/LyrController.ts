import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyr")
export default class LyrController {
  @operation({
    summary: "Get Lyr",
  })
  @get()
  static getLyr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyr",
  })
  @post("{id}")
  static createLyr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
