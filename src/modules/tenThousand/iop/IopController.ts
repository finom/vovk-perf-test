import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iop")
export default class IopController {
  @operation({
    summary: "Get Iop",
  })
  @get()
  static getIop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iop",
  })
  @post("{id}")
  static createIop = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
