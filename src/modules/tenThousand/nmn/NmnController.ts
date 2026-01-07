import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmn")
export default class NmnController {
  @operation({
    summary: "Get Nmn",
  })
  @get()
  static getNmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmn",
  })
  @post("{id}")
  static createNmn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
