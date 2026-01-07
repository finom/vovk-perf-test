import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njr")
export default class NjrController {
  @operation({
    summary: "Get Njr",
  })
  @get()
  static getNjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njr",
  })
  @post("{id}")
  static createNjr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
