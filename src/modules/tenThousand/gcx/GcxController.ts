import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcx")
export default class GcxController {
  @operation({
    summary: "Get Gcx",
  })
  @get()
  static getGcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcx",
  })
  @post("{id}")
  static createGcx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
