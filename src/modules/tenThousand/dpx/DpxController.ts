import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpx")
export default class DpxController {
  @operation({
    summary: "Get Dpx",
  })
  @get()
  static getDpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpx",
  })
  @post("{id}")
  static createDpx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
