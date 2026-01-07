import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgs")
export default class BgsController {
  @operation({
    summary: "Get Bgs",
  })
  @get()
  static getBgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgs",
  })
  @post("{id}")
  static createBgs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
