import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvv")
export default class DvvController {
  @operation({
    summary: "Get Dvv",
  })
  @get()
  static getDvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvv",
  })
  @post("{id}")
  static createDvv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
