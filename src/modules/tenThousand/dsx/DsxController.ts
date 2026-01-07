import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsx")
export default class DsxController {
  @operation({
    summary: "Get Dsx",
  })
  @get()
  static getDsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsx",
  })
  @post("{id}")
  static createDsx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
