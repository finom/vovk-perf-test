import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfs")
export default class JfsController {
  @operation({
    summary: "Get Jfs",
  })
  @get()
  static getJfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfs",
  })
  @post("{id}")
  static createJfs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
