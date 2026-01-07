import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pu")
export default class PuController {
  @operation({
    summary: "Get Pu",
  })
  @get()
  static getPu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pu",
  })
  @post("{id}")
  static createPu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
