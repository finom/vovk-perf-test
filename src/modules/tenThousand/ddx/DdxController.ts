import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddx")
export default class DdxController {
  @operation({
    summary: "Get Ddx",
  })
  @get()
  static getDdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddx",
  })
  @post("{id}")
  static createDdx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
