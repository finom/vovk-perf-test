import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkf")
export default class GkfController {
  @operation({
    summary: "Get Gkf",
  })
  @get()
  static getGkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkf",
  })
  @post("{id}")
  static createGkf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
