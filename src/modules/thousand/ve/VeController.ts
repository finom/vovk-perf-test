import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ve")
export default class VeController {
  @operation({
    summary: "Get Ve",
  })
  @get()
  static getVe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ve",
  })
  @post("{id}")
  static createVe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
