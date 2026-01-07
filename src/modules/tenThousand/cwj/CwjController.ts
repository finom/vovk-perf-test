import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwj")
export default class CwjController {
  @operation({
    summary: "Get Cwj",
  })
  @get()
  static getCwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwj",
  })
  @post("{id}")
  static createCwj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
