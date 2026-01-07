import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csh")
export default class CshController {
  @operation({
    summary: "Get Csh",
  })
  @get()
  static getCsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csh",
  })
  @post("{id}")
  static createCsh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
