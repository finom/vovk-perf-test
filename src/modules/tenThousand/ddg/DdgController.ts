import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddg")
export default class DdgController {
  @operation({
    summary: "Get Ddg",
  })
  @get()
  static getDdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddg",
  })
  @post("{id}")
  static createDdg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
