import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlf")
export default class NlfController {
  @operation({
    summary: "Get Nlf",
  })
  @get()
  static getNlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlf",
  })
  @post("{id}")
  static createNlf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
