import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dng")
export default class DngController {
  @operation({
    summary: "Get Dng",
  })
  @get()
  static getDng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dng",
  })
  @post("{id}")
  static createDng = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
