import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vv")
export default class VvController {
  @operation({
    summary: "Get Vv",
  })
  @get()
  static getVv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vv",
  })
  @post("{id}")
  static createVv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
