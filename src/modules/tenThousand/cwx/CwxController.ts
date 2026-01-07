import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwx")
export default class CwxController {
  @operation({
    summary: "Get Cwx",
  })
  @get()
  static getCwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwx",
  })
  @post("{id}")
  static createCwx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
