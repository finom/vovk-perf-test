import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vn")
export default class VnController {
  @operation({
    summary: "Get Vn",
  })
  @get()
  static getVn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vn",
  })
  @post("{id}")
  static createVn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
