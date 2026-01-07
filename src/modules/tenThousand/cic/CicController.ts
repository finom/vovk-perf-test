import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cic")
export default class CicController {
  @operation({
    summary: "Get Cic",
  })
  @get()
  static getCic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cic",
  })
  @post("{id}")
  static createCic = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
