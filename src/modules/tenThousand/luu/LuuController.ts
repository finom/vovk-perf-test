import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luu")
export default class LuuController {
  @operation({
    summary: "Get Luu",
  })
  @get()
  static getLuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Luu",
  })
  @post("{id}")
  static createLuu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
