import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmw")
export default class DmwController {
  @operation({
    summary: "Get Dmw",
  })
  @get()
  static getDmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmw",
  })
  @post("{id}")
  static createDmw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
