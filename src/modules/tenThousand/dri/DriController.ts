import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dri")
export default class DriController {
  @operation({
    summary: "Get Dri",
  })
  @get()
  static getDri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dri",
  })
  @post("{id}")
  static createDri = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
