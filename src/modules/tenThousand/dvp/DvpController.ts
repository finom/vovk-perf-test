import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvp")
export default class DvpController {
  @operation({
    summary: "Get Dvp",
  })
  @get()
  static getDvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvp",
  })
  @post("{id}")
  static createDvp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
