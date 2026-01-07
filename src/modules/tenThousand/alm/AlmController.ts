import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alm")
export default class AlmController {
  @operation({
    summary: "Get Alm",
  })
  @get()
  static getAlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alm",
  })
  @post("{id}")
  static createAlm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
