import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sv")
export default class SvController {
  @operation({
    summary: "Get Sv",
  })
  @get()
  static getSv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sv",
  })
  @post("{id}")
  static createSv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
