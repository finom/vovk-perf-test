import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbj")
export default class LbjController {
  @operation({
    summary: "Get Lbj",
  })
  @get()
  static getLbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbj",
  })
  @post("{id}")
  static createLbj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
