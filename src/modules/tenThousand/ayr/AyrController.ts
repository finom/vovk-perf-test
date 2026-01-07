import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayr")
export default class AyrController {
  @operation({
    summary: "Get Ayr",
  })
  @get()
  static getAyr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayr",
  })
  @post("{id}")
  static createAyr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
