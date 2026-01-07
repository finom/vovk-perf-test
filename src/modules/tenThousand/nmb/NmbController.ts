import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmb")
export default class NmbController {
  @operation({
    summary: "Get Nmb",
  })
  @get()
  static getNmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmb",
  })
  @post("{id}")
  static createNmb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
