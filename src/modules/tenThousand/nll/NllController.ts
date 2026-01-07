import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nll")
export default class NllController {
  @operation({
    summary: "Get Nll",
  })
  @get()
  static getNll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nll",
  })
  @post("{id}")
  static createNll = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
