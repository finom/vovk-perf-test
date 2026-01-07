import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmz")
export default class GmzController {
  @operation({
    summary: "Get Gmz",
  })
  @get()
  static getGmz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmz",
  })
  @post("{id}")
  static createGmz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
