import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvq")
export default class DvqController {
  @operation({
    summary: "Get Dvq",
  })
  @get()
  static getDvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvq",
  })
  @post("{id}")
  static createDvq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
