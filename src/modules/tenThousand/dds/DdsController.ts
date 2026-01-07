import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dds")
export default class DdsController {
  @operation({
    summary: "Get Dds",
  })
  @get()
  static getDds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dds",
  })
  @post("{id}")
  static createDds = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
