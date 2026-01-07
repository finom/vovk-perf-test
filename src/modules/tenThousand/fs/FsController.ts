import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fs")
export default class FsController {
  @operation({
    summary: "Get Fs",
  })
  @get()
  static getFs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fs",
  })
  @post("{id}")
  static createFs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
