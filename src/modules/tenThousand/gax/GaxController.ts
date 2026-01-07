import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gax")
export default class GaxController {
  @operation({
    summary: "Get Gax",
  })
  @get()
  static getGax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gax",
  })
  @post("{id}")
  static createGax = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
