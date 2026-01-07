import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvk")
export default class DvkController {
  @operation({
    summary: "Get Dvk",
  })
  @get()
  static getDvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvk",
  })
  @post("{id}")
  static createDvk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
