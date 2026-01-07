import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcz")
export default class GczController {
  @operation({
    summary: "Get Gcz",
  })
  @get()
  static getGcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcz",
  })
  @post("{id}")
  static createGcz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
