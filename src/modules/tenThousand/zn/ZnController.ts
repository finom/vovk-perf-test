import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zn")
export default class ZnController {
  @operation({
    summary: "Get Zn",
  })
  @get()
  static getZn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zn",
  })
  @post("{id}")
  static createZn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
