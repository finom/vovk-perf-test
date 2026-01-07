import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyl")
export default class DylController {
  @operation({
    summary: "Get Dyl",
  })
  @get()
  static getDyl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyl",
  })
  @post("{id}")
  static createDyl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
