import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcj")
export default class GcjController {
  @operation({
    summary: "Get Gcj",
  })
  @get()
  static getGcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcj",
  })
  @post("{id}")
  static createGcj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
