import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njy")
export default class NjyController {
  @operation({
    summary: "Get Njy",
  })
  @get()
  static getNjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njy",
  })
  @post("{id}")
  static createNjy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
