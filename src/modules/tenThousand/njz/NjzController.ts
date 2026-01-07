import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njz")
export default class NjzController {
  @operation({
    summary: "Get Njz",
  })
  @get()
  static getNjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njz",
  })
  @post("{id}")
  static createNjz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
