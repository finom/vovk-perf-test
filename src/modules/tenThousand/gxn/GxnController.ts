import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxn")
export default class GxnController {
  @operation({
    summary: "Get Gxn",
  })
  @get()
  static getGxn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxn",
  })
  @post("{id}")
  static createGxn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
