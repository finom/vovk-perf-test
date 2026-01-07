import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctv")
export default class CtvController {
  @operation({
    summary: "Get Ctv",
  })
  @get()
  static getCtv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctv",
  })
  @post("{id}")
  static createCtv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
