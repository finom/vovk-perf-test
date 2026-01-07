import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvx")
export default class DvxController {
  @operation({
    summary: "Get Dvx",
  })
  @get()
  static getDvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvx",
  })
  @post("{id}")
  static createDvx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
