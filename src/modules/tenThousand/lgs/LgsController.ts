import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgs")
export default class LgsController {
  @operation({
    summary: "Get Lgs",
  })
  @get()
  static getLgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgs",
  })
  @post("{id}")
  static createLgs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
