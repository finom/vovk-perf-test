import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifs")
export default class IfsController {
  @operation({
    summary: "Get Ifs",
  })
  @get()
  static getIfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifs",
  })
  @post("{id}")
  static createIfs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
