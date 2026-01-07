import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfs")
export default class HfsController {
  @operation({
    summary: "Get Hfs",
  })
  @get()
  static getHfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfs",
  })
  @post("{id}")
  static createHfs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
