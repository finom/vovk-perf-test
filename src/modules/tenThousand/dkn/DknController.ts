import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkn")
export default class DknController {
  @operation({
    summary: "Get Dkn",
  })
  @get()
  static getDkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkn",
  })
  @post("{id}")
  static createDkn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
