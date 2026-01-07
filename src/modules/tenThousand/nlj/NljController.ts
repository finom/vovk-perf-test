import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlj")
export default class NljController {
  @operation({
    summary: "Get Nlj",
  })
  @get()
  static getNlj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlj",
  })
  @post("{id}")
  static createNlj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
