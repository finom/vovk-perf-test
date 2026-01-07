import { procedure, prefix, get, post, operation } from "vovk";

@prefix("miv")
export default class MivController {
  @operation({
    summary: "Get Miv",
  })
  @get()
  static getMiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Miv",
  })
  @post("{id}")
  static createMiv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
