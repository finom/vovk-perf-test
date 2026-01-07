import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nge")
export default class NgeController {
  @operation({
    summary: "Get Nge",
  })
  @get()
  static getNge = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nge",
  })
  @post("{id}")
  static createNge = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
