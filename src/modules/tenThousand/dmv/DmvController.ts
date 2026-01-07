import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmv")
export default class DmvController {
  @operation({
    summary: "Get Dmv",
  })
  @get()
  static getDmv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmv",
  })
  @post("{id}")
  static createDmv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
