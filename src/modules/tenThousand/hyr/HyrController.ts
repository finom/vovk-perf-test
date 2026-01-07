import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyr")
export default class HyrController {
  @operation({
    summary: "Get Hyr",
  })
  @get()
  static getHyr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyr",
  })
  @post("{id}")
  static createHyr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
