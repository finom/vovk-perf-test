import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmz")
export default class CmzController {
  @operation({
    summary: "Get Cmz",
  })
  @get()
  static getCmz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmz",
  })
  @post("{id}")
  static createCmz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
