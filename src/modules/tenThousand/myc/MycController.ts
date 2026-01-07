import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myc")
export default class MycController {
  @operation({
    summary: "Get Myc",
  })
  @get()
  static getMyc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myc",
  })
  @post("{id}")
  static createMyc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
