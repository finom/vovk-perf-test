import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvh")
export default class DvhController {
  @operation({
    summary: "Get Dvh",
  })
  @get()
  static getDvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvh",
  })
  @post("{id}")
  static createDvh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
