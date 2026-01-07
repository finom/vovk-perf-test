import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njx")
export default class NjxController {
  @operation({
    summary: "Get Njx",
  })
  @get()
  static getNjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njx",
  })
  @post("{id}")
  static createNjx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
